import { UiState } from "./UiProvider";

type UiActionType = { type: "[UI] - Set Season"; payload: number | string};

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "[UI] - Set Season":
      return {
        ...state,
        season: action.payload,
      };

    default:
      return state;
  }
};
