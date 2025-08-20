"use client";
import { useState } from "react";
import { navItems } from "../constant";
import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";
import { useAuth } from "@/features/auth/hooks/use-auth";

const Sidebar = () => {
  const { user, isFetched } = useAuth();
  const [isOpen, setOpen] = useState(false);
  const [isTransition, setTransition] = useState(false);

  const handleToggle = (open: boolean) => {
    setOpen(open);
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
    }, 300);
  };

  if (!user || !isFetched) {
    return <div className="w-[78px] bg-secondary/20" />;
  }

  return (
    <nav
      className={cn(
        "animate-sidebar-from-left",
        "h-screen border-r pt-24",
        isTransition && "duration-200",
        isOpen ? "md:w-60 w-[78px]" : "w-[78px]"
      )}
      onMouseEnter={() => handleToggle(true)}
      onMouseLeave={() => handleToggle(false)}
    >
      <div className="px-3 py-2">
        <nav className="space-y-2">
          {navItems.map((navItem) => (
            <SidebarItem
              key={navItem.title}
              isOpen={isOpen}
              navItem={navItem}
            />
          ))}
        </nav>
      </div>
    </nav>
  );
};
export { Sidebar };
