// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNxMetro } = require('@nrwl/react-native');

module.exports = withNxMetro(getDefaultConfig(__dirname));
