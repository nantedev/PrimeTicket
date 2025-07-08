import { homePath, ticketsPath } from "@/paths";
import Link from "next/link";
import { LucideGem} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

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
            <div className="flex items-center gap-x-2" >
                <Link href={homePath()} className={buttonVariants({variant: "ghost"})}>
                  <LucideGem/>
                  <h1 className="text-lg bold">PrimeTicket</h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-2">
              <ThemeSwitcher />
              <Link href={ticketsPath()} className={buttonVariants({variant: "default"})}>Tickets</Link>
            </div>
          </nav>       
    );
};

export { Header };