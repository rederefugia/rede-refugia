"use strict";

import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import { List, HelperText, TextInput } from "react-native-paper";

import auth from "../../auth";
import components from "../../components";
import theme from "../../utils/theme";
import localization from "../../utils/localization";

/**
 * @memberof module:settings
 * @namespace settings.SettingsScreen
 * @name SettingsScreen
 * @description It builds the Settings screen view
 * @returns {React.ReactElement} SettingsScreen
 */
const SettingsScreen = () => {
  const { authError, deleteAccount } = React.useContext(auth.AuthContext);

  const [
    /**
     * @name password
     * @type {string}
     * @memberof module:settings.SettingsScreen
     */
    password,
    /**
     * @method setPassword
     * @type {React.Dispatch}
     * @memberof module:settings.SettingsScreen
     */
    setPassword,
  ] = React.useState("");

  /**
   * @method hasPassword
   * @memberof module:settings.SettingsScreen
   * @description It checks if the password state is not empty
   * @returns {boolean}
   */
  const hasPassword = () => password.length > 0;

  /**
   * @method hasError
   * @memberof module:settings.SettingsScreen
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
 * @memberof module:settings.SettingsScreen
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

export default SettingsScreen;
