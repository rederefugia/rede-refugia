import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Card,
  Headline,
  Paragraph,
  HelperText,
  TextInput,
} from "react-native-paper";

import localization from "../../utils/localization";

const InstitutionIdentificationScreen = ({ navigation }) => {
  const [cnpj, setCnpj] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isInUse, setIsInUse] = React.useState(false);

  const next = () => {
    navigation.navigate("auth-data");
  };

  return (
    <View style={styles.view}>
      <Card style={styles.card}>
        <Card.Title
          title={localization.t("screens.institution_identification.title")}
        />
        <Card.Content>
          <Headline>
            {localization.t("screens.institution_identification.headline")}
          </Headline>
          <HelperText visible={isInUse} type="error">
            {localization.t(
              "screens.institution_identification.cnpj_error_message"
            )}
          </HelperText>
          <TextInput
            value={cnpj}
            onChangeText={setCnpj}
            left={<TextInput.Icon name="account-tie" />}
          />
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button
            color="red"
            icon="cancel"
            onPress={() => navigation.navigate("login")}
          >
            {localization.t(
              "screens.institution_identification.cancel_button_label"
            )}
          </Button>
          <Button icon="arrow-right" onPress={next} loading={isLoading}>
            {localization.t(
              "screens.institution_identification.next_button_label"
            )}
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1, alignItems: "center", justifyContent: "center" },
  card: { minWidth: "30%" },
  paragraph: { paddingVertical: "16px" },
  actions: { paddingHorizontal: "16px", justifyContent: "space-between" },
});

export default InstitutionIdentificationScreen;
