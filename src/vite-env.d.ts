/// <reference types="vite/client" />

declare module '*.json' {
  const value: unknown;
  export default value;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
