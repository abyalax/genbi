'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { FC } from 'react';
import { ToggleTheme } from '~/app/_components/ui/toggle-theme';
import { assets } from '~/assets';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '~/components/ui/navigation-menu';
import { Button } from './button';

interface NavbarProps {
  navigation?: { name: string; href: string }[];
}

export const Navbar: FC<NavbarProps> = ({ navigation }) => {
  const { data: session } = useSession();

  return (
    <div className="border-b w-full sticky top-0 z-50 bg-navbar text-white">
      <div className="flex px-4 md:px-6 lg:pr-24 h-16 w-full items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex gap-2 md:gap-4">
            <Image src={assets.genbi.LogoGenbiPolos} alt="GenBI" width={80} height={80} className="w-10 md:w-12" />
            <h2 className="text-sm md:text-lg font-semibold my-auto whitespace-nowrap">GENBI UNISKA</h2>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex mx-6">
          <NavigationMenuList>
            {navigation?.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()}>
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Actions */}
        <div className="ml-auto flex items-center space-x-2 md:space-x-4">
          {/* Theme Toggle - Hidden on small mobile */}
          <div className="hidden sm:block">
            <ToggleTheme />
          </div>
          {/* User Menu - Desktop */}
          <div className="hidden md:block">
            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={session.user.image ?? ''} alt={session.user.name ?? ''} />
                      <AvatarFallback>{session.user.name?.charAt(0) ?? 'U'}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{session.user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{session.user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" asChild>
                <Link href="/auth/login">Sign in</Link>
              </Button>
            )}
          </div>

          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {navigation?.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <div className="flex items-center justify-between w-full">
                    <span>Theme</span>
                    <ToggleTheme />
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {session?.user ? (
                  <>
                    <DropdownMenuLabel className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={session.user.image ?? ''} alt={session.user.name ?? ''} />
                        <AvatarFallback>{session.user.name?.charAt(0) ?? 'U'}</AvatarFallback>
                      </Avatar>
                      <span>{session.user.name}</span>
                    </DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem asChild>
                    <Link href="/auth/login">Sign in</Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};
