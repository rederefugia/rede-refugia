import * as React from "react";
import { StyleSheet } from "react-native";

import { Button } from "react-native-paper";

import ModalCard from "../ModalCard";

import theme from "../../utils/theme";

const CreateOpportunitiesButton = ({ label }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <ModalCard visible={visible} setVisible={setVisible} />
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
