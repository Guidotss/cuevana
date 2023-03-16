import { createContext } from "react";

interface UiContextProps {
  season: number | string;
  loading: boolean;

  setSeason: (season: number | string) => void;
}

export const UiContext = createContext({} as UiContextProps);
