/// <reference types="vite/client" />
/// <reference types="@inertiajs/react" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  // add more env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}