import { createContext, ReactNode, useContext, useReducer } from "react";

type TokenContextProps = {
  token?: string | undefined;
  dispatch: React.Dispatch<ActionType>;
};

type Token = {
  token: string;
} | null;

type ProviderProps = {
  children: ReactNode;
};

type ActionType = { type: "LOGIN"; payload: string } | { type: "LOGOUT" };

const TokenContext = createContext({} as TokenContextProps);

export const useToken = () => {
  return useContext(TokenContext);
};

const initialState = {} as Token;

//Wrote the reducer because originally I planned to include user info here
//But there's no need because there's only 1 page.

const tokenReducer = (token: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "LOGIN":
      return (token = { ...token, token: action.payload });
    case "LOGOUT":
      return (token = null);
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
