export interface SignedInUserType {
  hotelId: string;
  userName: string;
  authToken: string;
  userImage: string;
  userEmail: string;
  isVerified: boolean;
  role: "admin" | "waiter" | "frontdesk" | "POS";
}

// backend hook response types.
export interface SecuredBackendResponseType {
  err: boolean;
  msg?: string;
  action?: () => void;
}

export interface LoginInfoType {
  hotelCode: string;
  email: string;
  password: string;
}

// For form validation response.

export interface LoginFormValidationResponseType {
  err: boolean;
  msg?: string;
  element?: string;
}
