import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

/**
 * @memberof Screens
 * @name HomeScreen
 * @description It implemets the Home Screen page
 */
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
};

/**
 * @name styles
 * @description it implements the home screen page' style grouped by component view
 */
const styles = StyleSheet.create({
    view: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default HomeScreen;
