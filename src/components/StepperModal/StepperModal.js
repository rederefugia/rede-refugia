import * as React from "react";
import { StyleSheet, Modal, View } from "react-native";

import { Button, Title, Paragraph, Card } from "react-native-paper";

import theme from "../../utils/theme";

const StepperModal = ({ visible, setVisible }) => {


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
            >
              Next
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
    justifyContent: "center"
  }
});

export default StepperModal;
