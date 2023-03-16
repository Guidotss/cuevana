import { FC, useReducer } from "react";
import { UiContext, uiReducer } from "./";

interface UiProviderProps {
  children: React.ReactNode;
}

export interface UiState {
  season: string;
  loading: boolean;
}

const UI_INITIAL_STATE: UiState = {
  season: "Especiales",
  loading: false,
};

export const UiProvider: FC<UiProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const setSeason = (season: string) => {
    dispatch({
      type: "[UI] - Set Season",
      payload: season,
    });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,

        setSeason,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
