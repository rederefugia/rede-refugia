import * as React from "react";
import { StyleSheet, View, Modal } from "react-native";

import { Card, Button, Title, IconButton } from "react-native-paper";

import theme from "../../utils/theme";

const DeleteModal = ({
  deleteMessage,
  deleteButtonLabel,
  handleDelete,
  children,
}) => {
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handlePress = async () => {
    setLoading(true);
    await handleDelete();
    setLoading(false);
    hideModal();
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
              <IconButton
                style={styles.icon}
                size={14}
                icon="close"
                onPress={hideModal}
              />
              <Title style={styles.cardText}>{deleteMessage}</Title>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <Button
                style={styles.cardActionsButton}
                uppercase={false}
                mode="contained"
                onPress={handlePress}
                loading={loading}
              >
                {deleteButtonLabel}
              </Button>
            </Card.Actions>
          </Card>
        </View>
      </Modal>
      {React.cloneElement(children, { onPress: () => showModal() })}
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
    alignSelf: "flex-end",
    backgroundColor: theme.DefaultTheme.colors.white,
    margin: theme.DefaultTheme.noSpace,
  },
  cardActionsButton: {
    paddingHorizontal: theme.DefaultTheme.space,
  },
});

export default DeleteModal;
