import axios, { AxiosInstance } from "axios";
import { createContext, useContext } from "react";

type FetchContextState = {
  request: AxiosInstance;
};

const FetchContext = createContext<FetchContextState | null>(null);
if (process.env.NODE_ENV === "development") {
  FetchContext.displayName = "FetchContext";
}

type FetchProviderProps = {
  children?: React.ReactNode;
};

const FetchProvider = ({
  children,
}: FetchProviderProps): React.ReactElement => {
  const request = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  return (
    <FetchContext.Provider value={{ request }}>
      {children}
    </FetchContext.Provider>
  );
};

const useFetch = (): FetchContextState => {
  const context = useContext(FetchContext);
  if (!context) {
    throw new Error("useFetch must be used within a FetchProvider");
  }

  return context;
};

export { FetchProvider, useFetch };
