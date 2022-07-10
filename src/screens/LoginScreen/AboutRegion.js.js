import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import { Title, Paragraph, Button } from "react-native-paper";

import localization from "../../utils/localization";
import theme from "../../utils/theme";

const AboutRegion = ({ navigation }) => {
  const handlePress = () => navigation.navigate("user-type");

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode="cover"
        source={require("../../../assets/bg-about.png")}
        style={styles.container}
      >
        <Title style={styles.title}>
          {localization.t("screens.login.about.title")}
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
        <Button
          mode="outlined"
          color={theme.DefaultTheme.colors.yellowFFD62C}
          style={styles.button}
          onPress={handlePress}
        >
          {localization.t("screens.login.about.button")}
        </Button>
      </ImageBackground>
    </View>
  );
};

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
  button: {
    borderColor: theme.DefaultTheme.colors.purpleA984D7,
    marginVertical: theme.DefaultTheme.space,
  },
});

export default AboutRegion;
