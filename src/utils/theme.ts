import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const paperTheme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  "colors": {
    "primary": "rgb(190, 194, 255)",
    "onPrimary": "rgb(0, 1, 172)",
    "primaryContainer": "rgb(0, 0, 239)",
    "onPrimaryContainer": "rgb(224, 224, 255)",
    "secondary": "rgb(197, 196, 221)",
    "onSecondary": "rgb(46, 47, 66)",
    "secondaryContainer": "rgb(68, 69, 89)",
    "onSecondaryContainer": "rgb(225, 224, 249)",
    "tertiary": "rgb(232, 185, 213)",
    "onTertiary": "rgb(70, 38, 59)",
    "tertiaryContainer": "rgb(94, 60, 82)",
    "onTertiaryContainer": "rgb(255, 216, 238)",
    "error": "rgb(255, 180, 171)",
    "onError": "rgb(105, 0, 5)",
    "errorContainer": "rgb(147, 0, 10)",
    "onErrorContainer": "rgb(255, 180, 171)",
    "background": "rgb(27, 27, 31)",
    "onBackground": "rgb(229, 225, 230)",
    "surface": "rgb(27, 27, 31)",
    "onSurface": "rgb(229, 225, 230)",
    "surfaceVariant": "rgb(70, 70, 79)",
    "onSurfaceVariant": "rgb(199, 197, 208)",
    "outline": "rgb(145, 144, 154)",
    "outlineVariant": "rgb(70, 70, 79)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(229, 225, 230)",
    "inverseOnSurface": "rgb(48, 48, 52)",
    "inversePrimary": "rgb(52, 61, 255)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(35, 35, 42)",
      "level2": "rgb(40, 40, 49)",
      "level3": "rgb(45, 45, 56)",
      "level4": "rgb(47, 47, 58)",
      "level5": "rgb(50, 50, 62)"
    },
    "surfaceDisabled": "rgba(229, 225, 230, 0.12)",
    "onSurfaceDisabled": "rgba(229, 225, 230, 0.38)",
    "backdrop": "rgba(48, 48, 56, 0.4)"
  }

};

export const theme = {
  font: {
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
  },
  color: {
    black: '#000000',
    white: '#FFFFFF',
    blue: '#00aaf2',
    background: '#fafafa',
    background_medium: '#f5f5f5',
    orange: '#f28200',
    red: '#FF0000',
    dark_blue: '#0078be',
    gray_medium: '#969696',
    gray_dark: '#807e7e',
    blue_dark: '#434854',
    green: "#13a100"
  },
};