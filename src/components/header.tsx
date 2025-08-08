"use client";
import { homePath, signInPath, signUpPath, ticketsPath } from "@/paths";
import Link from "next/link";
import { LucideGem, LucideLogOut } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { SubmitButton } from "./form/submit-button";
import { signOut } from "@/features/auth/action/sign-out";
import { useAuth } from "@/features/auth/hooks/use-auth";

const Header = () => {
  const { user, isFetched } = useAuth();

  if (!isFetched) {
    return null;
  }

  const navItem = user ? (
    <>
      <Link
        href={ticketsPath()}
        className={buttonVariants({ variant: "default" })}
      >
        Tickets
      </Link>
      <form action={signOut}>
        <SubmitButton label="Sign Out" icon={<LucideLogOut />} />
      </form>
    </>
  ) : (
    <>
      <Link
        href={signUpPath()}
        className={buttonVariants({ variant: "outline" })}
      >
        Sign Up
      </Link>
      <Link
        href={signInPath()}
        className={buttonVariants({ variant: "outline" })}
      >
        Sign In
      </Link>
    </>
  );

  return (
    <nav
      className="
            supports-backdrop-blur:bg-background/60
            fixed left-0 right-0 top-0 z-20
            border-b bg-background/95 backdrop-blur
            w-full flex py-2.5 px-5 justify-between
            shadow-lg animate-header-from-top"
    >
      <div className="flex items-center gap-x-2">
        <Link
          href={homePath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <LucideGem />
          <h1 className="text-lg bold">PrimeTicket</h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-2">
        <ThemeSwitcher />
        {navItem}
      </div>
    </nav>
  );
};

export { Header };
