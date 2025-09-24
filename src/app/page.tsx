"use client";

import {
  useSidebarStore,
  useSelectedItem,
} from "@/components/Sidebar/SidebarStore";
import { UserDropDownMenu } from "@/components/Sidebar/UserDropDownMenu";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Card, CardTitle, CardHeader } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, BellDot, Bolt } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const { items } = useSidebarStore();
  const selectedItem = useSelectedItem();

  const [notification, setNotification] = useState(false);

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header fixo */}
      <header className="h-16 flex items-center justify-between px-6 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
        </div>

        <div className="flex items-center gap-6">
          <AnimatedThemeToggler />
          <Bolt className="size-6" />
          {!notification ? (
            <Bell className="size-6" />
          ) : (
            <BellDot className="size-6" />
          )}
          <UserDropDownMenu />
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 overflow-auto bg-[#ECECEC] p-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg">
            Item selecionado: {selectedItem || "Nenhum"}
          </p>
        </div>
      </main>
    </div>
  );
}
