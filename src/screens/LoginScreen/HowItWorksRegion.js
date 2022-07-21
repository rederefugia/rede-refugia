import * as React from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";

import { Button } from "react-native-paper";

import localization from "../../utils/localization";
import theme from "../../utils/theme";

const window = Dimensions.get("window");
const imageRatio = 1278 / 1355;

const HowItWorksRegion = React.forwardRef(({ navigation }, ref) => {
  const handlePress = () => navigation.navigate("user-type");

  return (
    <View style={styles.container} ref={ref}>
      <Image
        style={styles.image}
        source={require("../../../assets/howto.png")}
      />
      <Button
        mode="contained"
        uppercase={false}
        compact={true}
        onPress={handlePress}
      >
        {localization.t("screens.login.how_to.guide_button_label")}
      </Button>
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
