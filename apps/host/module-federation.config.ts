import { ModuleFederationPluginOptions } from "@rspack/core";
// import { dependencies } from "./package.json";

export const config: ModuleFederationPluginOptions = {
  name: "host",
  remotes: {
    settings: "settings@http://localhost:3001/remoteEntry.js"
  },
  shared: ["react", "react-dom"]
};
