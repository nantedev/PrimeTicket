"use client";

import { LucideCloudMoon, LucideCloudSun, LucideMoonStar } from "lucide-react";
import useTheme from "next-theme";
import { Button } from "@/components/ui/button";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

return(
    <div>
        <Button 
        variant="outline"
        size="icon" 
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <LucideCloudSun className="
            h-5 w-5 rotate-0 transition-all 
            dark:-rotate-90 dark:scale-0"
            />
            <LucideCloudMoon className="
             absolute h-5 w-5 rotate-90 scale-0 transition-transform 
            dark:rotate-0 dark:scale-100"
            />
        </Button>
    </div>
)
}

export { ThemeSwitcher }