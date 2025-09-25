"use client";
import {
  Calendar,
  Inbox,
  LayoutDashboard,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
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


// Menu items com IDs únicos
const items: SidebarItem[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    id: "inbox",
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    id: "calendar",
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    id: "search",
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    id: "settings",
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function SidebarApp() {
  const selectedItem = useSelectedItem();
  const { setSelectedItem } = useSidebarStore();

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
  };

  return (
    <Sidebar collapsible="icon" className="" variant="inset">
      <SidebarContent>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuButton>
              <Image src="/logo.png" alt="logo" width={32} height={32} />
              <div>
                <span className="text-2xl font-bold text-[#353F49] dark:text-[#ffffff]">
                  easy
                </span>
                <span className="text-2xl font-bold text-[#26BA92]">.</span>
                <span className="text-2xl font-bold text-[#353F49] dark:text-[#ffffff]">
                  b
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    asChild
                    className="h-12 w-full"
                    isActive={selectedItem === item.id}
                    onClick={() => handleItemClick(item.id)}
                  >
                    <a href={item.url}>
                      <item.icon className="" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
