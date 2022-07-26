import * as React from "react";
import { StyleSheet } from "react-native";

import { Card } from "react-native-paper";

import DismissButton from "./CardDismissButton";

import theme from "../../utils/theme";

const CardActions = ({ onClose, children }) => {
  return (
    <Card.Actions style={styles.content}>
      {React.Children.map(children, (child) => {
        if (child?.type.name === DismissButton.name)
          return React.cloneElement(child, { onClose });
        else child;
      })}
    </Card.Actions>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardActions;
