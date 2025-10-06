import { DefaultMainMenu, Tldraw } from "tldraw";
import { TLDRAW_LICENSE_KEY } from "./env";

function App() {
  return (
    <div
      className="p-4 h-screen w-screen"
      style={{
        
      }}
    >
      <div className="w-full h-full border-8">
        <Tldraw
          components={{
            MainMenu: () => {
              return <DefaultMainMenu></DefaultMainMenu>;
            },
          }}
          licenseKey={TLDRAW_LICENSE_KEY ?? ""}
        />
      </div>
    </div>
  );
}

export default App;
