import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import { Title, Paragraph, Button } from "react-native-paper";

import localization from "../../utils/localization";
import theme from "../../utils/theme";

const AboutRegion = React.forwardRef(({ navigation }, ref) => {
  const handlePress = () => navigation.navigate("user-type");

  return (
    <View ref={ref}>
      <ImageBackground
        resizeMode="cover"
        source={require("../../../assets/bg-about.png")}
        style={styles.container}
      >
        <Title style={styles.title}>
          {localization.t("screens.login.about.start_title")}
        </Title>
        <Paragraph style={styles.paragraph}>
          {localization.t("screens.login.about.paragraph_1")}
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          {localization.t("screens.login.about.paragraph_2")}
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          {localization.t("screens.login.about.paragraph_3")}
        </Paragraph>
        <Title style={styles.title}>
          {localization.t("screens.login.about.end_title")}
        </Title>
      </ImageBackground>
    </View>
  );
});

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  container: {
    ...theme.DefaultStyle.view,
    paddingVertical: theme.DefaultTheme.space,
  },
  title: {
    color: theme.DefaultTheme.colors.yellowFFD62C,
  },
  paragraph: {
    marginHorizontal: "20%",
    marginVertical: theme.DefaultTheme.spaceSmall,
    color: theme.DefaultTheme.colors.white,
    textAlign: "center",
  },
});

export default AboutRegion;
