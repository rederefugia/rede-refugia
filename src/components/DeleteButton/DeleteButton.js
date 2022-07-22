import * as React from "react";
import { StyleSheet, View, Modal } from "react-native";

import { IconButton, Card, Button, Title } from "react-native-paper";

import localization from "../../utils/localization";
import theme from "../../utils/theme";
import firestore from "../../utils/firebase/firestore";

const DeleteButton = ({ id, updateScreen }) => {
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const deleteOpportunity = async () => {
    setLoading(true);
    await firestore.deleteById(firestore.COLLECTIONS.OPPORTUNITIES, id);
    setLoading(false);
    hideModal();
    updateScreen();
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={hideModal}
        onDismiss={hideModal}
      >
        <View style={styles.view}>
          <Card style={styles.cardView}>
            <Card.Content>
              <Title style={styles.cardText}>
                {localization.t(
                  "screens.opportunities.delete_opportunity_modal.delete_text"
                )}
              </Title>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <Button
                style={styles.cardActionsButton}
                uppercase={false}
                mode="contained"
                onPress={deleteOpportunity}
                loading={loading}
              >
                {localization.t(
                  "screens.opportunities.delete_opportunity_modal.delete_button"
                )}
              </Button>
            </Card.Actions>
          </Card>
        </View>
      </Modal>
      <IconButton
        icon="trash-can"
        color={theme.DefaultTheme.colors.purple}
        style={styles.icon}
        onPress={showModal}
      />
    </>
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
