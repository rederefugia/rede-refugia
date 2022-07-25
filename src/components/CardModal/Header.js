import * as React from "react";
import { StyleSheet } from "react-native";

import { Card, IconButton } from "react-native-paper";

import theme from "../../utils/theme";

const Header = ({ title, left, onClose }) => {
  return (
    <Card.Title
      style={styles.cardHeader}
      titleStyle={styles.cardHeaderTitle}
      title={title}
      left={left}
      right={(props) => (
        <IconButton
          {...props}
          style={styles.closeIcon}
          icon="close"
          size={14}
          onPress={() => {
            onClose();
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  closeIcon: {
    backgroundColor: theme.DefaultTheme.colors.white,
    marginVertical: theme.DefaultTheme.noSpace,
  },
});

export default Header;
