import { homePath, ticketsPath } from "@/paths";
import { NavItem } from "./type";
import { LucideBook, LucideLibrary } from "lucide-react";

export const navItems: NavItem[] = [
  {
    title: "All tickets",
    icon: <LucideLibrary />,
    href: homePath(),
  },
  {
    title: "My tickets",
    icon: <LucideBook />,
    href: ticketsPath(),
  },
];

export const closedClassName =
  "text-background opacity-0 transition-all duration-300 group-hover:z-40 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100";
