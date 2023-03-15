import { UiState } from "./UiProvider";

type UiActionType = 
    | { type: "SET_LOADING", payload: boolean }

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
    switch (action.type) {
        case "SET_LOADING":
            return state;
        default:
            return state;
    }
}



