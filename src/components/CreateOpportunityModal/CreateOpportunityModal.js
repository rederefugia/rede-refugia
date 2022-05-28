import * as React from "react";

import { Button, Text, RadioButton } from "react-native-paper";

import StepperModal from "../StepperModal";

const CreateOpportunityModal = ({ visible, setVisible }) => {
  const steps = [
    { title: "Step 1", content: <Text>Content 1</Text> },
    { title: "Step 2", content: <Text>Content 2</Text> },
    { title: "Step 3", content: <Text>Content 3</Text> },
  ];

  return (
    <StepperModal steps={steps} visible={visible} setVisible={setVisible} />
  );
};

export default CreateOpportunityModal;
