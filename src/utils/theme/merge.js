import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { configureFonts, DefaultTheme as PaperDefaultTheme } from "react-native-paper";
import merge from "deepmerge";

const MergedTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);

const fontConfig = {
  web: {
    regular: {
      fontFamily: "Inter",
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: "Inter",
      fontWeight: 'normal',
    },
    light: {
      fontFamily: "Inter",
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: "Inter",
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: "Inter",
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: "Inter",
      fontWeight: 'normal',
    },
    light: {
      fontFamily: "Inter",
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: "Inter",
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: "Inter",
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: "Inter",
      fontWeight: 'normal',
    },
    light: {
      fontFamily: "Inter",
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: "Inter",
      fontWeight: 'normal',
    },
  }
};

const theme = {
  ...MergedTheme,
  fonts: configureFonts(fontConfig),
  roundness: "12px",
  roundnessLarge: "36px",
  noSpace: "0px",
  spaceSmall: "8px",
  space: "16px",
  spaceLarge: "32px",
  fontSize: "16px",
  fontSizeSmall: "12px",
  fontSizeLarge: "24px",
  fontSizeXLarge: "36px",
  fontWeight: "500",
  fontWeightLarge: "900",
  fontFamily: "Inter",
  colors: {
    primary: "#862F84",
    background: "#FFFFFF",
    surface: "#849DD7",
    accent: "#FFE0FE",
    light_pink: "#FEE2FF",
    purpleDark: "#5E205D",
    purple: "#9E76CF",
    purple491C4C: "#491C4C",
    purpleA984D7: "#A984D7",
    white: "#FAFAFA",
    grayE5E5E5: "#E5E5E5",
    grayF3F0F3: "#F3F0F3",
    grayLight: "#C4C3C3",
    gray: "#E1E0E0",
    black: "#000000",
    yellowFFD62C: "#FFD62C",
  },
};

const styles = {
  view: { flex: 1, alignItems: "center", justifyContent: "center" },
  mainContent: {
    flex: 1,
    margin: theme.spaceLarge,
  },
  cardHeader: {
    minHeight: null,
    borderTopStartRadius: theme.roundness,
    borderTopEndRadius: theme.roundness,
  },
  cardHeaderTitle: {
    color: theme.colors.background,
    fontFamily: theme.fontFamily,
    alignSelf: "center"
  },
  cardInput: {
    borderRadius: theme.roundness,
  },
  cardActions: {
    marginVertical: theme.space,
    paddingHorizontal: theme.space,
    justifyContent: "space-between",
  },
  cardActionsButton: {
    fontWeight: "normal",
    padding: theme.spaceSmall,
  },
  cardView: {},
  menuItem: {
    fontWeight: theme.fontWeight,
    margin: theme.noSpace,
    marginVertical: theme.spaceSmall,
    paddingLeft: theme.space,
  },
  button: {
    fontSize: theme.fontSize,
    fontWeight: "700",
    paddingHorizontal: theme.spaceSmall,
  },
};

export const DefaultTheme = theme;
export const DefaultStyle = styles;
