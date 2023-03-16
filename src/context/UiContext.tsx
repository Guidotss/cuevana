import { createContext } from 'react';

interface UiContextProps {
    season:string ;
    loading:boolean;

    setSeason: ( season:string ) => void;
}


export const UiContext = createContext({} as UiContextProps);