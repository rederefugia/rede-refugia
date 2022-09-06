import * as React from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";

import { Paragraph } from "react-native-paper";

import HeaderRegion from "./HeaderRegion";
import AboutRegion from "./AboutRegion.js";
import HowItWorksRegion from "./HowItWorksRegion";

import auth from "../../auth";

import localization from "../../utils/localization";
import theme from "../../utils/theme";

const LoginScreen = ({ navigation }) => {
  const viewRefs = {
    login: React.useRef(null),
    about: React.useRef(null),
    howto: React.useRef(null),
  };
  const handleScroll = (componentName) => {
    viewRefs[componentName].current.scrollIntoView({ behavior: "smooth" });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRegion handleScroll={handleScroll} />,
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
      <AboutRegion navigation={navigation} ref={viewRefs.about} />
      <HowItWorksRegion navigation={navigation} ref={viewRefs.howto} />
      <auth.LoginForm navigation={navigation} ref={viewRefs.login} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  scrollview: {
    backgroundColor: theme.DefaultTheme.colors.grayE5E5E5,
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
