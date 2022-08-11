import * as React from "react";
import { StyleSheet, Linking } from "react-native";

import { Button } from "react-native-paper";

import theme from "../../utils/theme";

let ButtonLink = ({ address, labelStyle, buttonStyle, children, type }) => {
  const handlePress = React.useCallback(async () => {
    const url_formatted = type ? type + address : address;
    const supported = await Linking.canOpenURL(url_formatted);
    if (supported) await Linking.openURL(url_formatted);
  }, [address]);

  return (
    <Button
      style={[styles.button, buttonStyle]}
      mode="text"
      compact={true}
      uppercase={false}
      labelStyle={[styles.label, labelStyle]}
      onPress={handlePress}
    >
      {children}
    </Button>
  );
};

ButtonLink.PHONE_TYPE = "tel:";
ButtonLink.EMAIL_TYPE = "mailto:";

const styles = StyleSheet.create({
  button: {
    textDecorationLine: "underline",
  },
  label: {
    color: theme.DefaultTheme.colors.black,
    opacity: "56%",
    fontSize: theme.DefaultTheme.fontSizeSmall,
  },
});

export default ButtonLink;
