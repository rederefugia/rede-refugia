import * as React from "react";
import { StyleSheet } from "react-native";

import { Button, Avatar } from "react-native-paper";
import components from "../../components";

import localization from "../../utils/localization";
import theme from "../../utils/theme";

const HeaderRegion = () => {
  return (
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
});

export default HeaderRegion;
