import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import localization from "../../utils/localization";

/**
 * @memberof Screens
 * @name SettingsScreen
 * @description It implemets the Settings Screen page
 */
const SettingsScreen = () => {
    return (
        <View style={styles.view}>
            <Text>{localization.t('settings')}</Text>
        </View>
    );
};

/**
 * @name styles
 * @description it implements the Settings screen page' style grouped by component view
 */
const styles = StyleSheet.create({
    view: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default SettingsScreen;
