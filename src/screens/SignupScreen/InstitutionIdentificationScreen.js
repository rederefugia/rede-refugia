import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import {
  Button,
  Card,
  HelperText,
  TextInput,
} from "react-native-paper";

import theme from "../../utils/theme";
import providers from "../../providers";
import localization from "../../utils/localization";
import firestore from "../../utils/firebase/firestore";

const InstitutionIdentificationScreen = ({ navigation }) => {
  const { cnpj, setCnpj } = React.useContext(providers.auth.AuthContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const next = async () => {
    setIsLoading(true);
    try {
      const data = await firestore.find(
        firestore.COLLECTIONS.USERS,
        firestore.filter("cnpj", "==", cnpj)
      );
      if (data.length > 0) {
        setError(
          localization.t(
            "screens.institution_identification.cnpj_error_message"
          )
        );
      } else {
        navigation.navigate("auth-data");
      }
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
    setIsLoading(false);
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../assets/login-background.png")}
      style={{ flex: 1, backgroundColor: theme.DefaultTheme.colors.accent }}
    >
      <View style={styles.view}>
        <View>
          <Card style={styles.cardView}>
            <Card.Title
              style={styles.cardHeader}
              titleStyle={{ ...theme.DefaultStyle.cardHeaderTitle }}
              title={localization.t(
                "screens.institution_identification.headline"
              )}
            />
            <Card.Content>
              <HelperText visible={error.length > 0} type="error">
                {error}
              </HelperText>
              <TextInput
                value={cnpj}
                onChangeText={setCnpj}
                style={styles.cardInput}
              />
            </Card.Content>
          </Card>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            style={styles.button}
            uppercase={false}
            mode="contained"
            onPress={() => navigation.navigate("login")}
          >
            {localization.t(
              "screens.institution_identification.cancel_button_label"
            )}
          </Button>
          <Button
            style={styles.button}
            uppercase={false}
            mode="contained"
            onPress={next}
            loading={isLoading}
          >
            {localization.t(
              "screens.institution_identification.next_button_label"
            )}
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  view: {
    ...theme.DefaultStyle.view,
  },
  cardContent: {
    ...theme.DefaultStyle.view,
    paddingVertical: theme.DefaultTheme.space,
  },
  button: {
    ...theme.DefaultStyle.cardActionsButton,
    margin: theme.DefaultTheme.space,
  },
});

export default InstitutionIdentificationScreen;
