import * as React from "react";
import { StyleSheet } from "react-native";

import { Button, Text } from "react-native-paper";

import StepperModal from "../StepperModal";

import theme from "../../utils/theme";

const CreateOpportunitiesButton = ({ label }) => {
  const [visible, setVisible] = React.useState(false);

  const steps = [
    {title: "Step 1", content: <Text>Content 1</Text>},
    {title: "Step 2", content: <Text>Content 2</Text>},
    {title: "Step 3", content: <Text>Content 3</Text>},
  ];

  return (
    <>
      <StepperModal steps={steps} visible={visible} setVisible={setVisible} />
      <Button
        mode="contained"
        uppercase={false}
        icon="plus"
        style={styles.button}
        onPress={() => setVisible(true)}
      >
        {label}
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  button: { margin: theme.DefaultTheme.space },
});

export default CreateOpportunitiesButton;
