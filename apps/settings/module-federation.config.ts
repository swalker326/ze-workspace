import path from "node:path";
import { dependencies } from "./package.json";

export const config = {
  name: "settings",
  filename: "remoteEntry.js",
  exposes: {
    "./Settings": "./src/App.tsx"
  },
  shared: {
    ...dependencies,
    "react-dom": {
      singleton: true
    },
    react: {
      singleton: true
    }
  }
};
