import * as React from "react";
import { StyleSheet, View, Modal } from "react-native";

import { Card } from "react-native-paper";

import Header from "./Header";
import Body from "./Body";
import Actions from "./Actions";
import DismissButton from "./DismissButton";

import theme from "../../utils/theme";

const CardModal = ({ trigger, children }) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  let subComponentList = Object.keys(CardModal);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(children, (child) =>
      child.type.name === key ? child : null
    )[0];
  });

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
            {subComponents.map((component) => {
              if (
                component?.type.name === Header.name ||
                component?.type.name === Actions.name
              )
                return React.cloneElement(component, {
                  onClose: hideModal,
                });
              else return component;
            })}
          </Card>
        </View>
      </Modal>
      {React.cloneElement(trigger, { onPress: () => showModal() })}
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
    padding: theme.DefaultTheme.spaceSmall,
  },
});

CardModal.Header = Header;
CardModal.Body = Body;
CardModal.Actions = Actions;
CardModal.DismissButton = DismissButton;

export default CardModal;
