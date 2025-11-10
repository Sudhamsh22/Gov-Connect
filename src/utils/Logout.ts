// src/utils/logout.ts
import { NavigateFunction } from "react-router-dom";

/**
 * Logs the user out by clearing session data and navigating to login.
 * @param navigate - The useNavigate function from react-router-dom.
 */
export const logout = (navigate: NavigateFunction) => {
  // Remove specific token from localStorage
  localStorage.removeItem("token");

  // Redirect to landing or login page
  navigate("/login")
};
