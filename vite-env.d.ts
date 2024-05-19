/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_SERVICE_ID: string
    readonly VITE_APP_TEMPLATE_ID: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }