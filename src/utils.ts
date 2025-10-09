import { type Editor, } from "tldraw";

/**
 * Gets all the shapes on the canvas and exports them as an image in the specified format
 */
export async function initiateImageExport(editor: Editor, format: "png" | "svg") {
  try {
    const shapeIds = editor.getCurrentPageShapeIds();
    if (shapeIds.size === 0) {
      console.warn("No shapes to export");
      return;
    }

    const { blob } = await editor.toImage([...shapeIds], {
      format,
    });

    // Generate a random file name
    const fileName = `meme-baord-${crypto.randomUUID().slice(0, 5)}`

    // Construct the URL using the blob, assign to the anchor tag, and trigger download
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName + `.${format}`;
    link.click();

    // Cleanup
    link.remove();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.log("Error initating download", (error as Error).message);
    return
  }
}



