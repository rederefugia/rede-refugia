import * as React from "react";
import { StyleSheet, View, Modal } from "react-native";

import { IconButton, Card, Button, Title } from "react-native-paper";

import DeleteModal from "../DeleteModal";

import localization from "../../utils/localization";
import theme from "../../utils/theme";
import firestore from "../../utils/firebase/firestore";

const DeleteButton = ({ id, updateScreen }) => {
  const deleteOpportunity = async () => {
    await firestore.deleteById(firestore.COLLECTIONS.OPPORTUNITIES, id);
    updateScreen();
  };

  return (
    <DeleteModal
      handleDelete={deleteOpportunity}
      deleteMessage={localization.t(
        "screens.opportunities.delete_opportunity_modal.delete_text"
      )}
      deleteButtonLabel={localization.t(
        "screens.opportunities.delete_opportunity_modal.delete_button"
      )}
    >
      <IconButton
        icon="trash-can"
        color={theme.DefaultTheme.colors.purple}
        style={styles.icon}
      />
    </DeleteModal>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  cardView: {
    minWidth: "30%",
    shadowColor: theme.DefaultTheme.colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: theme.DefaultTheme.roundnessLarge,
    elevation: 5,
  },
  cardActions: {
    ...theme.DefaultStyle.cardActions,
    justifyContent: "center",
  },
  cardText: {
    color: theme.DefaultTheme.colors.white,
    alignSelf: "center",
  },
  icon: {
    margin: theme.DefaultTheme.noSpace,
    justifyContent: "flex-start",
  },
  cardActionsButton: {
    paddingHorizontal: theme.DefaultTheme.space,
  },
});

export default DeleteButton;
