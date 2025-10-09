import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useState,
} from "react";
import type { Editor } from "tldraw";

// Application context type
export type AppCtxType = {
  editor: Editor | null;
  setEditor: Dispatch<SetStateAction<Editor | null>>;
};

export const ApplicationContext = createContext<AppCtxType>({
  editor: null,
  setEditor: () => {},
});

export default function ApplicationContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [editor, setEditor] = useState<Editor | null>(null);
  return (
    <ApplicationContext.Provider value={{ editor, setEditor }}>
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
