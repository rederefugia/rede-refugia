import * as React from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";

import { Button, Avatar, Paragraph } from "react-native-paper";

import AboutRegion from "./AboutRegion.js";
import HowItWorksRegion from "./HowItWorksRegion";

import components from "../../components";

import localization from "../../utils/localization";
import theme from "../../utils/theme";

const LoginScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <components.HorizontalScrollList>
          <Button
            mode="text"
            compact={true}
            uppercase={false}
            style={styles.headerLink}
            labelStyle={styles.headerLinkLabel}
          >
            {localization.t("screens.login.header.about_menu_label")}
          </Button>
          <Button
            mode="text"
            compact={true}
            uppercase={false}
            style={styles.headerLink}
            labelStyle={styles.headerLinkLabel}
          >
            {localization.t("screens.login.header.how_it_works_menu_label")}
          </Button>
          <Button
            mode="text"
            compact={true}
            uppercase={false}
            style={[
              styles.headerLink,
              { borderRightWidth: theme.DefaultTheme.noSpace },
            ]}
            labelStyle={styles.headerLinkLabel}
          >
            {localization.t("screens.login.header.login_menu_label")}
          </Button>
          <Avatar.Image
            source={require("../../../assets/logo.png")}
            style={styles.headerLogo}
            size={theme.DefaultTheme.fontSizeXLarge}
          />
        </components.HorizontalScrollList>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/logo-rede-refugia.png")}
          style={styles.topLogoImage}
        />
        <Paragraph style={styles.topContainerParagraph}>
          {localization.t("screens.login.top_container.paragraph")}
        </Paragraph>
      </View>
      <AboutRegion navigation={navigation} />
      <HowItWorksRegion navigation={navigation} />
      <components.LoginForm navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  headerLogo: {
    margin: "auto",
    marginLeft: theme.DefaultTheme.space,
  },
  headerLink: {
    borderRadius: theme.DefaultTheme.noSpace,
    borderRightColor: theme.DefaultTheme.colors.white,
    borderRightWidth: "1px",
  },
  headerLinkLabel: {
    fontSize: theme.DefaultTheme.fontSize,
    color: theme.DefaultTheme.colors.white,
  },
  scrollview: {
    backgroundColor: theme.DefaultTheme.colors.grayLight,
  },
  container: {
    padding: theme.DefaultTheme.spaceLarge,
  },
  topLogoImage: {
    resizeMode: "contain",
    height: "180px",
  },
  topContainerParagraph: {
    alignSelf: "center",
    textAlign: "center",
    maxWidth: "40%",
    fontSize: theme.DefaultTheme.fontSizeLarge,
    color: theme.DefaultTheme.colors.purple491C4C,
  },
});

export default LoginScreen;
