// State interfaces =====================================================
export interface UIState {
  errorMessage: string;
  loading: boolean;
}

// Actions interfaces ===================================================
export interface ActionSetErrorMessage {
  type: string;
  payload: string;
}
export interface ActionSetLoading {
  type: string;
  payload: boolean;
}

// All actions ==========================================================
export type UIActions = ActionSetErrorMessage | ActionSetLoading;
