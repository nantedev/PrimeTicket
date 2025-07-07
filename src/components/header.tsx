import { homePath, ticketsPath } from "@/src/paths";
import Link from "next/link";
import { LucideKanban } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { ThemeSwitcher } from "./theme/theme-switcher";

const Header = () => {
    return (   
          <nav
            className="
            supports-backdrop-blur:bg-background/60
            fixed left-0 right-0 top-0 z-20
            border-b bg-background/95 backdrop-blur
            w-full flex py-2.5 px-5 justify-between
            shadow-lg"
          >
            <div>
                <Link href={homePath()} className={buttonVariants({variant: "ghost"})}>
                  <LucideKanban />
                  <h1 className="text-lg bold">TicketBounty</h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-4">
              <ThemeSwitcher />
              <Link href={ticketsPath()} className={buttonVariants({variant: "default"})}>Tickets</Link>
            </div>
          </nav>       
    );
};

export { Header };