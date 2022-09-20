import { createContext, ReactNode, useContext, useReducer } from "react";

type TokenContextProps = {
  username?: string | undefined;
  token?: string | undefined;
  dispatch: React.Dispatch<ActionType>;
};

type User = {
  username: string;
  token: string;
} | null;

type ProviderProps = {
  children: ReactNode;
};

const TokenContext = createContext({} as TokenContextProps);

export const useToken = () => {
  return useContext(TokenContext);
};

const initialState = {} as User;

type ActionType = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

const tokenReducer = (user: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "LOGIN":
      return (user = action.payload);
    case "LOGOUT":
      return (user = null);
  }
};

export const TokenContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(tokenReducer, initialState);

  return (
    <TokenContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TokenContext.Provider>
  );
};
