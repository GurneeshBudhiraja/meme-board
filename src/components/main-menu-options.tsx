"use client";
import { useApplicationContext } from "../provider/ContextProvider";

export type TLDRAW_MENU_OPTIONS_TYPE = {
  name: string;
  onclick: (params: any) => any;
  key: string;
  subOptions?: Array<Exclude<TLDRAW_MENU_OPTIONS_TYPE, "subOptions">>;
};

export const TLDRAW_MENU_OPTIONS: Array<TLDRAW_MENU_OPTIONS_TYPE> = [
  {
    name: "Export",
    onclick: () => {},
    key: "export",
    subOptions: [
      {
        key: "png",
        name: "PNG",
        onclick: () => {},
      },
      { key: "svg", name: "SVG", onclick: () => {} },
    ],
  },
];

function MenuOptions() {
  const { editor } = useApplicationContext();
  return (
    <div className="windows98-menu">
      {TLDRAW_MENU_OPTIONS.map((option) => (
        <div key={option.key} className="windows98-menu-item-container group">
          {/* Main menu item */}
          <div className="windows98-menu-item" onClick={option.onclick}>
            {option.name}
          </div>

          {/* Submenu (dropdown) */}
          {option.subOptions && option.subOptions.length > 0 && (
            <div className="windows98-submenu">
              {option.subOptions.map((subOption) => (
                <div
                  key={subOption.key}
                  className="windows98-submenu-item"
                  onClick={() => {
                    subOption.onclick(editor);
                  }}
                >
                  {subOption.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MenuOptions;
