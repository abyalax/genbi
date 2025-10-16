import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken"
import { Admin, signIn } from "@/services/auth/service";

interface User {
    id: string;
    email: string;
    name: string;
    role: string;
}

const authOptions: AuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Credentials({
            type: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (!credentials) {
                    console.log("No credentials provided");
                    return null;
                }
                const { email, password } = credentials;
                console.log({ email, password });
                
                try {
                    const admin: Admin | null = await signIn(email);
                    console.log({ admin });

                    if (!admin) {
                        console.log("User not found");
                        return null;
                    }

                    if (admin.role === "root") {
                        return {
                            id: admin.id.toString(),
                            email: admin.email,
                            name: admin.name,
                            role: admin.role
                        }
                    }

                    const passwordConfirm = await compare(password, admin.password);
                    if (!passwordConfirm) {
                        console.log("Password mismatch");
                        return null;
                    }

                    const user: User = {
                        id: admin.id.toString(),
                        email: admin.email,
                        name: admin.name,
                        role: admin.role,
                    };
                    console.log("Login as user: ", user);
                    return user;
                } catch (error) {
                    console.error("Error during authorization: ", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, user }: any) {
            console.log("JWT Callback - Token:", token);
            console.log("JWT Callback - Account:", account);
            console.log("JWT Callback - User:", user);
            if (account?.provider === "credentials") {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.image = user.image;
                token.role = user.role
            }
            console.log("Assign Token:", token);
            return token
        },

        async session({ session, token }: any) {
            console.log("Session Callback - Token:", token);
            console.log("Session Callback - Session:", session);
            if ('id' in token) {
                session.user.id = token.id;
            }
            if ('name' in token) {
                session.user.name = token.name;
            }
            if ('email' in token) {
                session.user.email = token.email;
            }
            if ('role' in token) {
                session.user.role = token.role;
            }
            const accesToken = jwt.sign(token, process.env.NEXTAUTH_SECRET || '', {
                algorithm: 'HS256',
            })
            session.accessToken = accesToken
            console.log("Assign Session", session);

            return session
        }
    },
    logger: {
        error(code, metadata) {
            console.log(code, metadata);
        },
        warn(code) {
            console.log(code);
        },
        debug(code, metadata) {
            console.log(code, metadata);
        },
    },
    pages: {
        signIn: "/login"
    }
}

export default NextAuth(authOptions)