import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import localization from "../../utils/localization";

/**
 * @memberof Screens
 * @name LoginScreen
 * @description It implemets the Login Screen page
 */
const LoginScreen = () => {
    return (
        <View style={styles.view}>
            <Text>{localization.t('login')}</Text>
        </View>
    );
};

/**
 * @name styles
 * @description it implements the Login screen page' style grouped by component view
 */
const styles = StyleSheet.create({
    view: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default LoginScreen;
