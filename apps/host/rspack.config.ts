import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";
import * as RefreshPlugin from "@rspack/plugin-react-refresh";
import { withZephyr } from "zephyr-webpack-plugin";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { config as moduleFederationConfig } from "./module-federation.config";
import { dependencies } from "./package.json";

const isDev = process.env.NODE_ENV === "development";

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ["chrome >= 87", "edge >= 88", "firefox >= 78", "safari >= 14"];

export default withZephyr()({
  context: __dirname,
  output: {
    publicPath: "auto"
  },
  entry: {
    main: "./src/main.tsx"
  },
  resolve: {
    extensions: ["...", ".ts", ".tsx", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset"
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDev,
                    refresh: isDev
                  }
                }
              },
              env: { targets }
            }
          }
        ]
      }
    ]
  },
  //@ts-expect-error
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: "./index.html"
    }),
    new ModuleFederationPlugin(moduleFederationConfig),
    isDev ? new RefreshPlugin() : null
  ].filter(Boolean),
  optimization: {
    minimizer: [
      //@ts-expect-error
      new rspack.SwcJsMinimizerRspackPlugin(),
      //@ts-expect-error
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets }
      })
    ]
  },
  experiments: {
    css: true
  }
});
//@ts-ignore
// export default withZephyr()(config);
