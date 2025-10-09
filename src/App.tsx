import { useState } from "react";
import TldrawWrapper from "./components/tldraw-wrapper";
import LoadingMonkey from "./assets/images/loading-monkey.gif";
import Header from "./components/header";

function App() {
  const [isTldrawMounted, setIsTldrawMounted] = useState(false);
  return (
    <div className="h-screen w-screen bg-teal-600 flex items-center justify-center font-sans relative">
      {/* old screen */}
      <div className="pointer-events-none fixed inset-0 z-50 screen-overlay" />

      <div className="windows98-window w-[95%] h-[95%] flex flex-col relative">
        <Header />
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
