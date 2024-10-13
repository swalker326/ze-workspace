import { ModuleFederationPluginOptions } from "@rspack/core";

export const config: ModuleFederationPluginOptions = {
  name: "host",
  remotes: ["settings@http://localhost:3001/remoteEntry.js"]
};
