import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
    const [formState, setFormState] = useState({
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false);
    const { push, query } = useRouter();
    const callbackUrl: string = Array.isArray(query.callbackUrl) ? query.callbackUrl[0] : query.callbackUrl ?? '/admin';

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        e.preventDefault();
        setFormState({
            ...formState,
            [type]: e.target.value
        })
    }
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)
        if (formState.email == "" || formState.password == "") {
            setIsLoading(false)
            alert("Email dan kata sandi harus diisi")
            return
        }
        console.log({ formState });
        
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: formState.email,
                password: formState.password,
                callbackUrl
            })
            if (res?.status == 200) {
                alert("Login Berhasil")
                push(callbackUrl)
            }
            else {
                console.log(res?.error);
                alert("Login Gagal")
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="relative flex min-h-screen justify-center items-center bg-[#edf0f7]">
            <button onClick={() => push("/")} className="absolute flex gap-3 top-4 left-4 bg-toska hover:bg-toska-dark text-white px-4 py-2 text-lg font-semibold rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-left-short text-2xl font-semibold" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                </svg>
                Back
            </button>
            <div className="bg-white shadow-2xl  p-10 max-w-[400px] rounded-xl xl:w-2/3 lg:w-1/3 md:w-1/2  sm:w-2/3">
                <div className="flex justify-between items-center my-8">
                    <h2 className="text-2xl font-semibold ">Masuk ke Halaman Admin</h2>
                </div>
                <form className="w-full" onSubmit={onSubmit}>
                    <input type="email" name="email" placeholder="Masukkan Email" onChange={(e) => onChange(e, "email")} className="border border-gray-400 w-full p-3 focus:outline-none focus:ring-1 focus:ring-toska rounded-lg" />
                    <p className="text-xs text-background font-medium mt-0">Contoh: example@gmail.com</p>

                    <input type="password" name="password" placeholder="Masukkan Kata Sandi" onChange={(e) => onChange(e, "password")} className="border border-gray-400 my-4 w-full p-3 focus:outline-none focus:ring-1 focus:ring-toska rounded-lg" />
                    <button type="submit" className="bg-toska hover:bg-toska-dark text-white w-full p-2 rounded-xl my-3 font-semibold text-lg disabled:cursor-not-allowed disabled:bg-gray-500" disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>

                </form>
            </div>
        </section>
    );
}

export default Login;
