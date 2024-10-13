import path from "node:path";

export const config = {
  name: "settings",
  filename: "remoteEntry.js",
  exposes: {
    "./Settings": path.resolve(__dirname, "src/App.tsx")
  }
};
