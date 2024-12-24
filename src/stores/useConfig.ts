import { create } from "zustand";
import { DibapressConfig } from "../Dibapress";

interface Props {
  config: DibapressConfig | null;
  setConfig: (config: DibapressConfig) => boolean;
}

export const useConfig = create<Props>((set) => {
  return {
    config: null,
    setConfig: (config: DibapressConfig) => {
      set({ config });
      return true;
    },
  };
});
