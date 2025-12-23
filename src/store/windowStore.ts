import { create } from "zustand";
import { WindowStore, WindowType } from "@/type";

const useWindowStore = create<WindowStore>((set) => ({
  zIndex: 1000,
  folder: false,
  terminal: false,

  openWindow: (window) =>
    set((state) => ({
      ...state,
      [window]: true,
      zIndex: state.zIndex + 1,
    })),

  closeWindow: (window) =>
    set((state) => ({
      ...state,
      [window]: false,
    })),

  bringToFront: () =>
    set((state) => ({
      zIndex: state.zIndex + 1,
    })),
}));

export default useWindowStore;
