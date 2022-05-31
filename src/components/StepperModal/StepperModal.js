import * as React from "react";
import { StyleSheet, Modal, View } from "react-native";

import { Button, Card, IconButton } from "react-native-paper";

import theme from "../../utils/theme";
import localization from "../../utils/localization";

const StepperModal = ({ visible, setVisible, steps, handleFinish, canGoNext, setCanGoNext, loading }) => {
  let [currentStep, setCurrentStep] = React.useState(0);

  const isLastStep = currentStep == steps.length - 1;

  const nextStep = () => {
    if (isLastStep) {
      handleFinish();
      setVisible(false);
      setCurrentStep(0);
    } else {
      setCanGoNext(false)
      setCurrentStep(
        currentStep < steps.length - 1 ? (currentStep += 1) : currentStep
      );
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
        setCurrentStep(0);
      }}
    >
      <View style={styles.view}>
        <Card style={styles.cardView}>
          <Card.Title
            style={styles.cardHeader}
            titleStyle={{ ...theme.DefaultStyle.cardHeaderTitle }}
            title={steps[currentStep].title}
            rightStyle={{
              marginHorizontal: theme.DefaultTheme.spaceSmall,
              marginVertical: theme.DefaultTheme.noSpace,
            }}
            right={(props) => (
              <IconButton
                {...props}
                style={{
                  backgroundColor: theme.DefaultTheme.colors.white,
                }}
                icon="close"
                size={14}
                onPress={() => {
                  setVisible(false);
                  setCurrentStep(0);
                }}
              />
            )}
          />
          <Card.Content style={styles.cardContent}>
            {steps[currentStep].content}
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <Button
              style={styles.cardActionsButton}
              uppercase={false}
              mode="contained"
              onPress={nextStep}
              disabled={!canGoNext}
              loading={loading}
            >
              {isLastStep
                ? localization.t("components.stepper_modal.finish_button_label")
                : localization.t("components.stepper_modal.next_button_label")}
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
    marginVertical: theme.DefaultTheme.noSpace,
  },
  cardHeader: {
    ...theme.DefaultStyle.cardHeader,
    minHeight: "50px",
  },
  cardContent: {
    color: theme.DefaultTheme.colors.white,
  },
});

export default StepperModal;
