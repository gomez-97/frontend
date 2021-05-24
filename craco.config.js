const CracoAlias = require("craco-alias");

module.exports = {
  eslint: {
    enable: false,
  },
  typescript: {
    enableTypeChecking: false,
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
  ],
};
