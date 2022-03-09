import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Card,
  Headline,
  HelperText,
  TextInput,
} from "react-native-paper";

import providers from "../../providers";
import localization from "../../utils/localization";
import firestore from "../../utils/firebase/firestore";

const InstitutionIdentificationScreen = ({ navigation }) => {
  const [setUser] = React.useContext(providers.auth.AuthContext);
  const [cnpj, setCnpj] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const next = async () => {
    setIsLoading(true);
    try {
      const data = await firestore.find("users", "cnpj", "==", cnpj);
      if (data.length > 0) {
        setError(
          localization.t(
            "screens.institution_identification.cnpj_error_message"
          )
        );
      } else {
        setUser({ cnpj });
        navigation.navigate("auth-data");
      }
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
    setIsLoading(false);
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
          <HelperText visible={error.length > 0} type="error">
            {error}
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
