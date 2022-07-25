import * as React from "react";
import { StyleSheet } from "react-native";

import { IconButton } from "react-native-paper";

import CardModal from "../CardModal";

import theme from "../../utils/theme";
import localization from "../../utils/localization";

const StepperModal = ({
  steps,
  handleFinish,
  canGoNext,
  setCanGoNext,
  trigger,
}) => {
  let [currentStep, setCurrentStep] = React.useState(0);

  const isLastStep = currentStep == steps.length - 1;

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const nextStep = async () => {
    if (isLastStep) {
      await handleFinish();
      setCurrentStep(0);
    } else {
      setCanGoNext(false);
      setCurrentStep(
        currentStep < steps.length - 1 ? (currentStep += 1) : currentStep
      );
    }
  };

  return (
    <CardModal trigger={trigger}>
      <CardModal.Header
        title={steps[currentStep].title}
        onClose={() => {
          setCurrentStep(0);
        }}
        left={(props) => {
          if (currentStep > 0)
            return (
              <IconButton
                {...props}
                style={{
                  backgroundColor: theme.DefaultTheme.colors.white,
                }}
                icon="chevron-left"
                size={14}
                onPress={previousStep}
              />
            );
        }}
      />
      <CardModal.Body>{steps[currentStep].content}</CardModal.Body>
      <CardModal.Actions>
        <CardModal.DismissButton
          label={
            isLastStep
              ? localization.t("components.stepper_modal.finish_button_label")
              : localization.t("components.stepper_modal.next_button_label")
          }
          onPress={nextStep}
          disabled={!canGoNext}
          shouldClose={isLastStep}
        />
      </CardModal.Actions>
    </CardModal>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
});

export default StepperModal;
