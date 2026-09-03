import { create } from "zustand";

type ActiveSectionState = {
  activeSection: string;
  setActiveSection: (id: string) => void;
};

export const useActiveSectionStore = create<ActiveSectionState>((set) => ({
  activeSection: "home", // valor inicial
  setActiveSection: (id) => set({ activeSection: id }),
}));
