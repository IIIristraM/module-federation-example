const configFactory = require("../../webpack/common.config");
const { ModuleFederationPlugin } = require("webpack").container;

const port = 3002;

const config = configFactory({
  context: __dirname,
  port,
});

config.plugins.push(
  new ModuleFederationPlugin({
    name: "app2",
    library: { type: "var", name: "app2" },
    filename: "remoteEntry.js",
    exposes: {
      "./Header": "./src/Header",
      "./utils": "./src/utils",
    },
    shared: {
      react: { singleton: true },
      "react-dom": { singleton: true },
    },
  })
);

module.exports = config;
