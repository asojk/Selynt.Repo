/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BLOB_READ_WRITE_TOKEN: string
  readonly BLOB_READ_WRITE_TOKEN: string
  readonly EDGE_CONFIG: string // Add this line
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}