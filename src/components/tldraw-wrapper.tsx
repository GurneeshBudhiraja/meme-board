import { Editor, Tldraw } from "tldraw";
import {
  TLDRAW_OPTIONS,
  TLDRAW_COMPONENTS,
} from "../constants/tldraw.constant";
import { TLDRAW_LICENSE_KEY } from "../env-export";
import type { Dispatch, SetStateAction } from "react";
import { useApplicationContext } from "../provider/ContextProvider";

export type TldrawWrapperProps = {
  setIsTldrawMounted: Dispatch<SetStateAction<boolean>>;
};

function TldrawWrapper({ setIsTldrawMounted }: TldrawWrapperProps) {
  const { setEditor } = useApplicationContext();
  return (
    <Tldraw
      options={{ ...TLDRAW_OPTIONS }}
      licenseKey={TLDRAW_LICENSE_KEY ?? ""}
      forceMobile
      components={{ ...TLDRAW_COMPONENTS }}
      onMount={(editor: Editor) => {
        setIsTldrawMounted(true);
        // Update the application context with the editor instance
        setEditor(editor);
      }}
    />
  );
}

export default TldrawWrapper;
