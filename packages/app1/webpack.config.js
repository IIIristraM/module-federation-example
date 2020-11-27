const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const configFactory = require("../../webpack/common.config");

const port = 3001;

const config = configFactory({
  context: __dirname,
  port,
});

config.plugins.push(
  new ModuleFederationPlugin({
    name: "app1",
    remotes: {
      app2: `app2@http://localhost:3002/remoteEntry.js`,
    },
    shared: {
      react: { singleton: true },
      "react-dom": { singleton: true },
    },
  })
);

module.exports = config;
