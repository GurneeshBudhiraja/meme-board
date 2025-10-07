import { Tldraw } from "tldraw";
import { TLDRAW_LICENSE_KEY } from "./env-export";
import { TLDRAW_OPTIONS } from "./constants/tldraw.constant";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen w-screen bg-teal-600 flex items-center justify-center font-sans">
      <div className="windows98-window w-[95%] h-[95%] flex flex-col">
        <Header />
        <div className="windows98-menu">
          <div className="windows98-menu-item">File</div>
          <div className="windows98-menu-item">Edit</div>
          <div className="windows98-menu-item">View</div>
          <div className="windows98-menu-item">Help</div>
        </div>

        <div className="windows98-content flex-1 overflow-hidden relative">
          <Tldraw
            options={TLDRAW_OPTIONS}
            licenseKey={TLDRAW_LICENSE_KEY ?? ""}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
