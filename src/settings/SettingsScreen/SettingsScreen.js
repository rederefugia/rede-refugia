'use strict'

import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import { List, HelperText, TextInput } from "react-native-paper";

import providers from "../../providers";
import components from "../../components";
import theme from "../../utils/theme";
import localization from "../../utils/localization";

/**
 * @component
 * @name SettingsScreen
 * @description It builds the Settings screen view
 * @returns {React.ReactElement} SettingsScreen
 */
const SettingsScreen = () => {
  const { authError, deleteAccount } = React.useContext(
    providers.auth.AuthContext
  );


  /**
   * @typedef PasswordState
   * @property {string} password
   * @property {React.Dispatch} setPassword
   */
  const [password, setPassword] = React.useState("");

  /**
   * @function
   * @name hasPassword
   * @description It checks if the password state is not empty
   * @returns {boolean} 
   */
  const hasPassword = () => password.length > 0;

  /**
   * @function
   * @name hasError
   * @description It checks if some authentication error happens
   * @returns {boolean} 
   */
  const hasError = () => authError?.length > 0;

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
          <components.CardHeader
            title={localization.t(
              "screens.settings.account_remove.modal.title"
            )}
          />
          <components.CardBody>
            <HelperText
              style={{ color: "red", opacity: 1 }}
              type="error"
              visible={hasError()}
            >
              {authError}
            </HelperText>
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
          </components.CardBody>
          <components.CardActions>
            <components.CardDismissButton
              label={localization.t(
                "screens.settings.account_remove.modal.delete_button_label"
              )}
              onPress={async () => await deleteAccount(password)}
              disabled={!hasPassword()}
              shouldClose={hasError()}
            />
          </components.CardActions>
        </components.CardModal>
      </ScrollView>
    </SafeAreaView>
  );
};

/**
 * Styles definitions for the Settings Screen
 */
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

/**
 * @module
 */
export default SettingsScreen;
