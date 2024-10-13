import { ModuleFederationPluginOptions } from "@rspack/core";
// import { dependencies } from "./package.json";

export const config: ModuleFederationPluginOptions = {
  name: "host",
  remotes: ["settings@http://localhost:3001/remoteEntry.js"],
  shared: {
    // ...dependencies,
    "react-dom": {
      singleton: true
    },
    react: {
      singleton: true
    }
  }
};
