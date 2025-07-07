"use client";

import { LucideCloudMoon, LucideCloudSun, LucideMoonStar } from "lucide-react";
import useTheme from "next-theme";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

return(
    <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === "light" ? <LucideCloudSun /> : <LucideCloudMoon /> }
        </button>
    </div>
)
}

export { ThemeSwitcher }