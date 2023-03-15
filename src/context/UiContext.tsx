import { createContext } from 'react';

interface UiContextProps {
    season:string | number;
    setSeason: (season:string | number) => void;
}


export const UiContext = createContext({} as UiContextProps);