// Data interfaces ======================================================
export interface UserData {
  email: string;
  password: string;
}
// State interfaces =====================================================
export interface AuthState {
  userData: UserData | null;
  signInSuccess: boolean;
}

// Actions interfaces ===================================================
export interface ActionSetUserData {
  type: string;
  payload: UserData;
}
export interface ActionSetSignInSuccess {
  type: string;
  payload: boolean;
}

// All actions ==========================================================
export type AuthActions = ActionSetUserData | ActionSetSignInSuccess;
