"use client";

import { UserDropDownMenu } from "@/components/menuTopSide/UserDropDownMenu";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, BellDot, Bolt } from "lucide-react";
import { useState } from "react";
import Dashboard from "@/components/dashboard/Dashboard";
import { useSelectedItem } from "@/components/sidebar/SidebarStore";

export default function Home() {
  const selectedItem = useSelectedItem();

  const [notification] = useState(false);

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header fixo */}
      <header className="h-16 flex items-center justify-between px-6 border-b border-gray-200 ">
        <div className="flex items-center -ml-2 md:-ml-4">
          <SidebarTrigger />
        </div>

        <div className="flex items-center gap-6 md:gap-4 sm:gap-3">
          <AnimatedThemeToggler />
          <Bolt className="size-4 lg:size-5" />
          {!notification ? (
            <Bell className="size-4 lg:size-5" />
          ) : (
            <BellDot className="size-4 lg:size-5" />
          )}
          <UserDropDownMenu />
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 overflow-auto bg-[#ECECEC] p-6 rounded-tl-2xl inset-shadow-sm">
        <div className="max-w-7xl mx-auto">
          {selectedItem === "dashboard" && <Dashboard />}
          <p className="text-lg">
            Item selecionado: {selectedItem || "Nenhum"}
          </p>
        </div>
      </main>
    </div>
  );
}
