import * as React from 'react';
import { Button, StyleSheet, View, AsyncStorage } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Collector" onPress={this._showCollectorScreen} />
                <Button title="HomeOwner" on onPress={this._showHomeOwnerScreen} />
                <Button title="SignOut" onPress={this._signOutAsync} />
            </View>
        );
    }

    _showCollectorScreen = () => {
        this.props.navigation.navigate('Collector');
    };

    _showHomeOwnerScreen = () => {
        this.props.navigation.navigate('HomeOwner');
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});