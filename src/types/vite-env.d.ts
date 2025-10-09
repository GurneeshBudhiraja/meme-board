/// <reference types="vite/client" />

interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  // strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_TLDRAW_KEY: string;
  readonly VITE_TLDRAW_KEY: string;
  readonly VITE_APPWRITE_PROJECT_ID: string;
  readonly VITE_APPWRITE_PROJECT_NAME: string;
  readonly VITE_APPWRITE_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}