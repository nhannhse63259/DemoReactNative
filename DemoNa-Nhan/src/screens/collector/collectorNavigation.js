import * as React from 'react';
import { Text, View, StyleSheet, Alert, ActivityIndicator } from 'react-native';

import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Content, List } from 'native-base';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';

import axios from 'axios';


import { getArticles } from '../../service/news';
import DataItem from './dataItem';

class HomeScreenNavi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: null
        }
    }

    /*
    componentDidMount() {
        getArticles().then(data => {
            this.setState({
                isLoading: false,
                data: data
            });
        }, error => {
            Alert.alert('Error', 'Something went wrong');
        }
        )
    }*/


    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f37b9702ad5f4f6fad0590b285599eed')
            .then((response) => {
                this.setState({
                    isLoading: false,
                    data: response
                });
            })
            .catch((error) => {
                Alert.alert('Error', 'Something went wrong');
            });
    }

    render() {
        console.log(this.state.data);

        let view = this.state.isLoading ? (
            <View style={styles.container}>
                <ActivityIndicator animating={this.state.isLoading} size="large" color="#0000ff" />

                <BarIndicator animating={this.state.isLoading} />
                <BallIndicator animating={this.state.isLoading} />

                <Text style={{ marginTop: 10 }}>
                    Please wait....
                </Text>
            </View>
        ) : (
                <List
                    dataArray={this.state.data}
                    renderRow={(item) => {
                        return <DataItem data={item} />
                    }}
                />
            )
        return (
            <Content>
                {view}
            </Content>
        );
    }
}

class MapScreenNavi extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Map Screen Navi</Text>
            </View>
        );
    }
}

class ChatScreenNavi extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Chat Screen Navi</Text>
            </View>
        );
    }
}

class ProfileScreenNavi extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Screen Navi</Text>
            </View>
        );
    }
}

const TabNavigator = createMaterialBottomTabNavigator(
    {
        HomeNavi: {
            screen: HomeScreenNavi,

            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name="home" />
                    </View>
                ),
            }
        },
        MapNavi: {
            screen: MapScreenNavi,
            navigationOptions: {
                tabBarLabel: "Map",
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name="home" />
                    </View>
                ),
            }
        },
        ChatNavi: {
            screen: ChatScreenNavi,
            navigationOptions: {
                tabBarLabel: "Chat",
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name="home" />
                    </View>
                ),
            }
        },
        ProfileNavi: {
            screen: ProfileScreenNavi,
            navigationOptions: {
                tabBarLabel: "Profile",
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name="home" />
                    </View>
                ),
            }
        },
    },
    {
        initialRouteName: 'HomeNavi',

    }
);

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
    },
});