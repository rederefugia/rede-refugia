import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import { List, HelperText, TextInput } from "react-native-paper";

import providers from "../../providers";
import components from "../../components";
import theme from "../../utils/theme";
import localization from "../../utils/localization";

const SettingsScreen = () => {
  const { user, deleteAccount } = React.useContext(providers.auth.AuthContext);
  const [password, setPassword] = React.useState("");

  const hasPassword = () => password.length > 0;

  return (
    <SafeAreaView>
      <ScrollView style={styles.mainContent}>
        <components.CardModal
          trigger={
            <List.Item
              accessibilityRole="button"
              titleStyle={[styles.text, { fontWeight: "bold" }]}
              descriptionStyle={styles.text}
              title={localization.t("screens.settings.account_remove.title")}
              description={localization.t(
                "screens.settings.account_remove.description"
              )}
              left={(props) => (
                <List.Icon
                  {...props}
                  color={theme.DefaultTheme.colors.purpleA984D7}
                  icon="account-remove"
                />
              )}
              right={(props) => (
                <List.Icon
                  {...props}
                  color={theme.DefaultTheme.colors.purpleA984D7}
                  icon="chevron-right"
                />
              )}
            />
          }
        >
          <components.CardModal.Header
            title={localization.t(
              "screens.settings.account_remove.modal.title"
            )}
          />
          <components.CardModal.Body>
            <TextInput
              placeholder={localization.t("screens.login.password_placeholder")}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              left={<TextInput.Icon disabled name="key-variant" />}
              style={styles.cardInput}
            />
            <HelperText type="info" visible={hasPassword()}>
              {localization.t("screens.settings.account_remove.modal.text")}
            </HelperText>
          </components.CardModal.Body>
          <components.CardModal.Actions>
            <components.CardModal.DismissButton
              label={localization.t(
                "screens.settings.account_remove.modal.delete_button_label"
              )}
              onPress={async () => await deleteAccount(password)}
              disabled={!hasPassword()}
              shouldClose={false}
            />
          </components.CardModal.Actions>
        </components.CardModal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  mainContent: {
    ...theme.DefaultStyle.mainContent,
    backgroundColor: theme.DefaultTheme.colors.gray,
    borderRadius: theme.DefaultTheme.roundness,
  },
  text: {
    color: theme.DefaultTheme.colors.purpleA984D7,
  },
});

export default SettingsScreen;
