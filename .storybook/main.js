module.exports = {
	stories: ["../src/**/*.stories.tsx"],
	addons: [
		"@storybook/addon-actions"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [{ loader: "ts-loader" }]
    }),
    config.resolve.extensions.push(".ts", ".tsx", ".d.ts");
    return config;
  }
}