import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  Calendar,
  LayoutDashboard,
  LucideIcon,
  Settings,
  Users,
} from "lucide-react";

export const items: SidebarItem[] = [
  { id: "dashboard", title: "Dashboard", url: "#", icon: LayoutDashboard },
  { id: "Receitas", title: "Receitas", url: "#", icon: BanknoteArrowUp },
  { id: "Despesas", title: "Despesas", url: "#", icon: BanknoteArrowDown },
  { id: "Calendário", title: "Calendário", url: "#", icon: Calendar },
  {
    id: "equipeManager",
    title: "Gestão de Equipe",
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

// Tipos para os itens da sidebar
export interface SidebarItem {
  title: string;
  url: string;
  icon: LucideIcon;
  id: string;
}

// Estado do store
interface SidebarState {
  selectedItem: string | null;
  items: SidebarItem[];
  isCollapsed: boolean;

  // Actions
  setSelectedItem: (itemId: string) => void;
  toggleCollapsed: () => void;
  setCollapsed: (collapsed: boolean) => void;
  resetSelection: () => void;
}

// Store principal
export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      // Estado inicial
      selectedItem: null,
      items: [], // você pode preencher via props ou importar de um arquivo fixo
      isCollapsed: false,

      // Actions
      setSelectedItem: (itemId: string) => set({ selectedItem: itemId }),
      toggleCollapsed: () =>
        set((state) => ({ isCollapsed: !state.isCollapsed })),
      setCollapsed: (collapsed: boolean) => set({ isCollapsed: collapsed }),
      resetSelection: () => set({ selectedItem: null }),
    }),
    {
      name: "sidebar-store",
      partialize: (state) => ({
        selectedItem: state.selectedItem,
        isCollapsed: state.isCollapsed,
        // items não persistem — devem vir do código
      }),
    }
  )
);

// Selectors úteis
export const useSelectedItem = () =>
  useSidebarStore((state) => state.selectedItem);
export const useSidebarItems = () => useSidebarStore((state) => state.items);
export const useIsCollapsed = () =>
  useSidebarStore((state) => state.isCollapsed);
export const useSidebarActions = () =>
  useSidebarStore((state) => ({
    setSelectedItem: state.setSelectedItem,
    toggleCollapsed: state.toggleCollapsed,
    setCollapsed: state.setCollapsed,
    resetSelection: state.resetSelection,
  }));
