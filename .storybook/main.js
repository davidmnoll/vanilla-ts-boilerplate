module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions", 
    "@storybook/addon-a11y", 
    "storybook-css-modules"
  ],
  "framework": "@storybook/html"
}