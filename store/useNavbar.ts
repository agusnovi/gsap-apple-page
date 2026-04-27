import { create } from "zustand"

type NavigationBar = {
    activeMenu: string | null;
    setActiveMenu: (menu: string) => void
}

const useNavbar = create<NavigationBar>()((set) => ({
  activeMenu: null,
  setActiveMenu: (menu) => set({ activeMenu: menu }),
}));

export default useNavbar;