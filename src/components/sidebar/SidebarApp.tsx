"use client";
import {
  BanknoteArrowDown,
  BanknoteArrowDownIcon,
  BanknoteArrowUp,
  Calendar,
  Inbox,
  LayoutDashboard,
  Search,
  Settings,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { SidebarItem, useSelectedItem, useSidebarStore } from "./SidebarStore";
import useLoadingTimeline from "@/hooks/useLoadingTimeline";

const items: SidebarItem[] = [
  { id: "dashboard", title: "Dashboard", url: "#", icon: LayoutDashboard },
  { id: "Receitas", title: "Receitas", url: "#", icon: BanknoteArrowUp },
  { id: "Despesas", title: "Despesas", url: "#", icon: BanknoteArrowDown },
  { id: "Calendário", title: "Calendário", url: "#", icon: Calendar },
  {
    id: "Funcionários",
    title: "Gestão de Funcionários",
    url: "#",
    icon: Users,
  },
  {
    id: "Configurações",
    title: "Configurações",
    url: "#",
    icon: Settings,
  },
];

export default function SidebarApp() {
  const selectedItem = useSelectedItem();
  const { setSelectedItem } = useSidebarStore();

  const { refs, registerItemRef } = useLoadingTimeline(
    { duration: 0.45, stagger: 0.07, autoPlay: true },
    [
      /* deps que devem rebuildar a animação, ex.: items.length */
    ]
  );

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarContent>
        <div ref={refs.rootRef} className="opacity-0">
          {/* ... */}
          <SidebarHeader>
            <SidebarMenu>
              <div ref={refs.logoRef} className="flex items-center gap-3">
                <Image src="/logo.png" alt="logo" width={32} height={32} />
                <div className="mt-1">
                  <span className="text-2xl font-bold text-[#353F49] dark:text-[#ffffff]">
                    easy
                  </span>
                  <span className="text-2xl font-bold text-[#26BA92]">.</span>
                  <span className="text-2xl font-bold text-[#353F49] dark:text-[#ffffff]">
                    b
                  </span>
                </div>
              </div>
            </SidebarMenu>
          </SidebarHeader>

          <SidebarGroup>
            <div ref={refs.labelRef}>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
            </div>

            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item, index) => (
                  <SidebarMenuItem key={item.id}>
                    <div ref={registerItemRef(index)}>
                      <SidebarMenuButton
                        asChild
                        className="h-12 w-full"
                        isActive={selectedItem === item.id}
                        onClick={() => setSelectedItem(item.id)}
                      >
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
      {/* ... */}
    </Sidebar>
  );
}
