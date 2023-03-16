import { FC, useReducer } from 'react';
import { UiContext,uiReducer } from './';

interface UiProviderProps {
    children: React.ReactNode;
}

export interface UiState {
    season:string | number;
}

const UI_INITIAL_STATE:UiState = {
    season:1
}

export const UiProvider:FC<UiProviderProps> = ({ children }) => {
    
    const [state,dispatch] = useReducer(uiReducer,UI_INITIAL_STATE);

    return (
        <UiContext.Provider value={{
            ...state,

            setSeason: (season:string | number) => {}
        }}>
            {children}
        </UiContext.Provider>
    )
}