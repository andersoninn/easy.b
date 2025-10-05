"use client";

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
import {
  items,
  SidebarItem,
  useSelectedItem,
  useSidebarStore,
} from "./SidebarStore";
import useLoadingTimeline from "@/hooks/useLoadingTimeline";
import { useIsMobile } from "@/hooks/use-mobile";

export default function SidebarApp() {
  const selectedItem = useSelectedItem();
  const { setSelectedItem } = useSidebarStore();
  const isMobile = useIsMobile();

  const { refs, registerItemRef } = useLoadingTimeline(
    { duration: 0.45, stagger: 0.07, autoPlay: true },
    [
      /* deps que devem rebuildar a animação, ex.: items.length */
    ]
  );

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarContent>
        <div
          ref={refs.rootRef}
          className={isMobile ? "opacity-100" : "opacity-0"}
        >
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
