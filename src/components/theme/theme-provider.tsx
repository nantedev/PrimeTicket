"use client"

import { ThemeProvider as BaseThemeProvider } from "next-theme";

type ThemeProviderProps = {
    children: React.ReactNode,
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
    return  (
    <BaseThemeProvider 
    attribute="class" 
    defaultTheme="system" 
    > {children} 
    </BaseThemeProvider>
    )
}

export { ThemeProvider}