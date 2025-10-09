import { useState } from "react";
import MenuOptions from "./components/main-menu-options";
import TldrawWrapper from "./components/tldraw-wrapper";
import Header from "./components/header";
import LoadingMonkey from "./assets/images/loading-monkey.gif";

function App() {
  const [isTldrawMounted, setIsTldrawMounted] = useState(false);
  return (
    <div className="h-screen w-screen bg-teal-600 flex items-center justify-center font-sans relative">
      {/* old screen */}
      <div className="pointer-events-none fixed inset-0 z-50 screen-overlay" />

      <div className="windows98-window w-[95%] h-[95%] flex flex-col relative">
        <Header />
        <MenuOptions />
        <div className="windows98-content flex-1 overflow-hidden relative">
          {!isTldrawMounted && (
            <div className="flex justify-center items-center h-full w-full">
              <img src={LoadingMonkey} alt="" className="object-contain" />
            </div>
          )}
          <TldrawWrapper setIsTldrawMounted={setIsTldrawMounted} />
        </div>
      </div>
    </div>
  );
}

export default App;
