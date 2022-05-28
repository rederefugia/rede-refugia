import * as React from "react";
import { StyleSheet, Modal, View } from "react-native";

import { Button, Card } from "react-native-paper";

import theme from "../../utils/theme";

const StepperModal = ({ visible, setVisible, steps }) => {
  let [currentStep, setCurrentStep] = React.useState(0);

  const nextStep = () =>
    setCurrentStep(
      currentStep < steps.length - 1 ? (currentStep += 1) : currentStep
    );

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
            title={steps[currentStep].title}
          />
          <Card.Content>{steps[currentStep].content}</Card.Content>
          <Card.Actions style={styles.cardActions}>
            <Button
              style={styles.cardActionsButton}
              uppercase={false}
              mode="contained"
              onPress={nextStep}
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
    justifyContent: "center",
  }
});

export default StepperModal;
