import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { DefaultTheme as PaperDefaultTheme } from "react-native-paper";
import merge from "deepmerge";

const MergedTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);

const theme = {
  ...MergedTheme,
  roundness: "8px",
  spaceSmall: "8px",
  space: "16px",
  spaceLarge: "32px",
  colors: {
    primary: "#862F84",
    background: "#FFFFFF",
    surface: "#849DD7",
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
    color: "#FFFFFF",
    fontFamily: "Inter",
    fontSize: "24px",
  },
  cardInput: {
    borderRadius: theme.roundness,
  },
  cardActions: {
    marginVertical: theme.space,
    paddingHorizontal: theme.space,
    justifyContent: "space-between",
  },
  cardView: {
    borderBottomColor: "#5E205D",
    borderBottomWidth: theme.space
  }
};

export const DefaultTheme = theme;
export const DefaultStyle = styles;
