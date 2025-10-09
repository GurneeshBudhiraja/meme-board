"use client";
import {
  createShapeId,
  useDialogs,
  useTldrawUiComponents,
  type Editor,
  type TLShape,
} from "tldraw";
import { useApplicationContext } from "../provider/ContextProvider";
import { initiateImageExport } from "../utils";
import { useCallback } from "react";

export type TLDRAW_MENU_OPTIONS_TYPE = {
  name: string;
  onclick: (editor: Editor | null) => any;
  key: string;
  subOptions?: Array<Exclude<TLDRAW_MENU_OPTIONS_TYPE, "subOptions">>;
};

function MenuOptions() {
  const { editor } = useApplicationContext();
  const { addDialog } = useDialogs();
  const { KeyboardShortcutsDialog } = useTldrawUiComponents();

  const ZOOM_ANIMATION = {
    duration: 300,
    easing: (t: number) => t * (2 - t),
  };

  const TLDRAW_MENU_OPTIONS: Array<TLDRAW_MENU_OPTIONS_TYPE> = [
    {
      name: "View",
      onclick: () => {},
      key: "view",
      subOptions: [
        {
          key: "zoom-in",
          name: "Zoom in",
          onclick: (editor: Editor | null) => {
            if (editor) {
              editor.zoomIn(undefined, {
                animation: ZOOM_ANIMATION,
              });
            }
          },
        },
        {
          key: "zoom-out",
          name: "Zoom out",
          onclick: (editor: Editor | null) => {
            if (editor) {
              editor.zoomOut(undefined, {
                animation: ZOOM_ANIMATION,
              });
            }
          },
        },
        {
          key: "zoom-100",
          name: "Zoom to 100%",
          onclick: (editor: Editor | null) => {
            if (editor) {
              editor.resetZoom(undefined, {
                animation: ZOOM_ANIMATION,
              });
            }
          },
        },
        {
          key: "zoom-fit",
          name: "Zoom to fit",
          onclick: (editor: Editor | null) => {
            if (editor) {
              editor.zoomToFit({
                animation: ZOOM_ANIMATION,
              });
            }
          },
        },
        {
          key: "zoom-selection",
          name: "Zoom to selection",
          onclick: (editor: Editor | null) => {
            if (editor) {
              editor.zoomToSelection({ animation: ZOOM_ANIMATION });
            }
          },
        },
      ],
    },
    {
      name: "Edit",
      onclick: () => {},
      key: "edit",
      subOptions: [
        {
          key: "undo",
          name: "Undo",
          onclick: (editor) => {
            if (editor) {
              editor.undo();
            }
          },
        },
        {
          key: "redo",
          name: "Redo",
          onclick: (editor) => {
            if (editor) {
              editor.redo();
            }
          },
        },
        {
          key: "copy",
          name: "Copy",
          onclick: (editor) => {
            if (editor) {
              const currentShape = editor.getOnlySelectedShape();
              if (currentShape) {
                const newShape: TLShape = {
                  ...currentShape,
                  id: createShapeId(),
                  x: currentShape.x + 20,
                  y: currentShape.y + 20,
                };
                const shapes = editor.getCurrentPageShapes();
                shapes.push(newShape);
                editor.createShapes(shapes);
              }
            }
          },
        },
        {
          key: "paste",
          name: "Paste",
          onclick: (editor) => {},
        },
        {
          key: "cut",
          name: "Cut",
          onclick: (editor) => {},
        },
        {
          key: "delete",
          name: "Delete",
          onclick: (editor) => {
            if (editor) {
              const selectedShape = editor.getOnlySelectedShapeId();
              if (selectedShape) {
                editor.deleteShape(selectedShape);
              }
            }
          },
        },
      ],
    },
    {
      name: "Export",
      onclick: () => {},
      key: "export",
      subOptions: [
        {
          key: "png",
          name: "PNG",
          onclick: async (editor: Editor | null) => {
            if (editor) {
              await initiateImageExport(editor, "png");
            }
          },
        },
        {
          key: "svg",
          name: "SVG",
          onclick: (editor: Editor | null) => {
            if (editor) {
              initiateImageExport(editor, "svg");
            }
          },
        },
      ],
    },
    {
      name: "Keyboard Shortcuts",
      onclick: () => openKeyboardShortcuts(),
      key: "keyboard-shortcuts",
    },
  ];

  // Function to open keyboard shortcuts dialog
  const openKeyboardShortcuts = useCallback(() => {
    if (editor && KeyboardShortcutsDialog) {
      addDialog({
        component: ({ onClose }) => {
          return (
            <KeyboardShortcutsDialog
              onClose={() => {
                onClose();
              }}
            />
          );
        },
        onClose: () => {},
      });
    }
  }, [editor, addDialog, KeyboardShortcutsDialog]);

  // Wrapper function to handle main menu item click
  const handleMainMenuClick = useCallback(
    (option: TLDRAW_MENU_OPTIONS_TYPE) => {
      if (!option.subOptions || option.onclick.toString() !== "() => {}") {
        option.onclick(editor);
      }
    },
    [editor]
  );

  // Wrapper function to handle submenu item click
  const handleSubMenuClick = useCallback(
    (
      subOption: Exclude<TLDRAW_MENU_OPTIONS_TYPE, "subOptions">,
      event: React.MouseEvent
    ) => {
      event.stopPropagation();
      subOption.onclick(editor);
    },
    [editor]
  );

  return (
    <div className="windows98-menu">
      {TLDRAW_MENU_OPTIONS.map((option) => (
        <div key={option.key} className="group relative">
          {/* Main menu item */}
          <div
            className="windows98-menu-item"
            onClick={() => handleMainMenuClick(option)}
          >
            {option.name}
          </div>

          {/* Submenu (dropdown) */}
          {option.subOptions && option.subOptions.length > 0 && (
            <div className="windows98-submenu">
              {option.subOptions.map((subOption) => (
                <div
                  key={subOption.key}
                  className={"windows98-submenu-item"}
                  onClick={(e) => handleSubMenuClick(subOption, e)}
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
