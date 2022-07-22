import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import { List } from "react-native-paper";

import providers from "../../providers";
import components from "../../components";
import theme from "../../utils/theme";
import localization from "../../utils/localization";

const SettingsScreen = () => {
  const { user, deleteAccount } = React.useContext(providers.auth.AuthContext);

  return (
    <SafeAreaView>
      <ScrollView style={styles.mainContent}>
        <components.DeleteModal
          handleDelete={deleteAccount}
          deleteMessage={localization.t(
            "screens.settings.account_remove.modal.text"
          )}
          deleteButtonLabel={localization.t(
            "screens.settings.account_remove.modal.delete_button_label"
          )}
        >
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
        </components.DeleteModal>
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
