import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  useContext,
} from "react";

// Application context type
export type AppCtxType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const ApplicationContext = createContext<AppCtxType>({
  isLoggedIn: false,
  setIsLoggedIn: () => null,
});

export default function ApplicationContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ApplicationContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplicationContext(): AppCtxType {
  const context = useContext(ApplicationContext);

  if (context === undefined) {
    throw new Error(
      "useApplicationContext must be used within a ContextProvider"
    );
  }

  return context;
}
