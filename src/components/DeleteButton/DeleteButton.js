import * as React from "react";
import { StyleSheet } from "react-native";

import { IconButton } from "react-native-paper";

import theme from "../../utils/theme";
import firestore from "../../utils/firebase/firestore";

const DeleteButton = ({ id, updateScreen }) => {
  const deleteOpportunity = async () => {
    await firestore.deleteById(firestore.COLLECTIONS.OPPORTUNITIES, id);
    updateScreen();
  };

  return (
    <IconButton
      icon="trash-can"
      color={theme.DefaultTheme.colors.purple}
      style={styles.icon}
      onPress={deleteOpportunity}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    margin: theme.DefaultTheme.noSpace,
    justifyContent: "flex-start",
  },
});

export default DeleteButton;
