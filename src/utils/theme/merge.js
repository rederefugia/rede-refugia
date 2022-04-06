import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { DefaultTheme as PaperDefaultTheme } from "react-native-paper";
import merge from "deepmerge";

const MergedTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);

const theme = {
  ...MergedTheme,
  roundness: "15px",
  roundnessLarge: "36px",
  noSpace: "0px",
  spaceSmall: "8px",
  space: "16px",
  spaceLarge: "32px",
  fontSize: "16px",
  fontSizeLarge: "24px",
  fontSizeSmall: "12px",
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
    white: "#FAFAFA"
  },
};

const styles = {
  view: { flex: 1, alignItems: "center", justifyContent: "center" },
  cardHeader: {
    backgroundColor: "#5E205D",
    borderTopStartRadius: theme.roundness,
    borderTopEndRadius: theme.roundness,
  },
  cardHeaderTitle: {
    color: theme.colors.background,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizeLarge,
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
  cardView: {
    borderBottomColor: theme.colors.purpleDark,
    borderBottomWidth: theme.space,
  },
  menuItem: {
    margin: theme.noSpace,
    marginVertical: theme.spaceSmall,
    paddingLeft: theme.space,
  }
};

export const DefaultTheme = theme;
export const DefaultStyle = styles;
