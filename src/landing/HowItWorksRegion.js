import * as React from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";

import theme from "../utils/theme";

const window = Dimensions.get("window");
const imageRatio = 1278 / 1355;

const HowItWorksRegion = React.forwardRef(({}, ref) => {
  return (
    <View style={styles.container} ref={ref}>
      <Image
        style={styles.image}
        source={require("../../assets/howto.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  container: {
    alignItems: "center",
    paddingVertical: theme.DefaultTheme.spaceLarge,
    backgroundColor: theme.DefaultTheme.colors.surface,
  },
  image: {
    width: window.width * 0.8,
    height: (window.width * 0.8) / imageRatio,
    resizeMode: "contain",
  },
  button: {
    marginVertical: theme.DefaultTheme.space,
    minWidth: "40%",
  },
});

export default HowItWorksRegion;
