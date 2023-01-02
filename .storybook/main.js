const path = require('path');

module.exports = {
    stories: [
      "../app/components/**/*.stories.mdx",
      "../app/components/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-interactions",
    ],
    features: { postcss: false },
    framework: "@storybook/react",
    typescript: { reactDocgen: "react-docgen" },
    core: {
      builder: "webpack5",
    },
    webpackFinal: async (config, { configType }) => {
        // Do this so it can see the public folder that contains the fonts
        config.resolve.roots = [
            path.resolve(__dirname, '../public'),
            'node_modules',
        ];
    
        // Return the altered config
        return config;
      },
  };