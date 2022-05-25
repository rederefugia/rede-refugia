import * as React from "react";
import { StyleSheet, Modal, View } from "react-native";

import { Button, Title, Paragraph, Card } from "react-native-paper";

import theme from "../../utils/theme";

const ModalCard = ({ visible, setVisible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.view}>
        <Card style={styles.cardView}>
          <Card.Title
            style={styles.cardHeader}
            titleStyle={{ ...theme.DefaultStyle.cardHeaderTitle }}
            title="Card Title"
          />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <Button
              style={styles.cardActionsButton}
              uppercase={false}
              mode="contained"
              onPress={() => setVisible(false)}
            >
              Cancel
            </Button>
            <Button
              style={styles.cardActionsButton}
              uppercase={false}
              mode="contained"
            >
              Ok
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  cardView: {
    ...theme.DefaultStyle.cardView,
    minWidth: "30%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: theme.DefaultTheme.roundnessLarge,
    elevation: 5,
  },
});

export default ModalCard;
