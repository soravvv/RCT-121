import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initState = {
  auth: false,
  token: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        auth: true,
        token: action.payload,
      };
    }
    case "LOGOUT_SUCCESS": {
      return {
        ...state,
        auth: false,
        token: null,
      };
    }
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
