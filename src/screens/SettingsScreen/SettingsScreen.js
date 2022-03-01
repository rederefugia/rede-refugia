import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

/**
 * @memberof Screens
 * @name SettingsScreen
 * @description It implemets the Settings Screen page
 */
const SettingsScreen = () => {
    return (
        <View style={styles.view}>
            <Text>Settings Screen</Text>
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
