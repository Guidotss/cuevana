import { FC, useReducer } from "react";
import { UiContext, uiReducer } from "./";

interface UiProviderProps {
  children: React.ReactNode;
}

export interface UiState {
  season: number | string;
  loading: boolean;
}

const UI_INITIAL_STATE: UiState = {
  season: 1,
  loading: false,
};

export const UiProvider: FC<UiProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const setSeason = (season: number | string) => {
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
