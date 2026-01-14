// metro.config.js
const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// If you need cjs extensions (optional)
defaultConfig.resolver.sourceExts.push("cjs");

module.exports = defaultConfig;
