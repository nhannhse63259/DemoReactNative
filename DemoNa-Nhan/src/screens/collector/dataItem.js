import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import { ListItem, Left, Body, Right, Thumbnail, Button, Text } from 'native-base';

import TimeAgo from './time';


class DataItem extends Component {
    constructor(props) {
        super(props);
        this.data = props.data; 
    }

    render() {
        return (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{
                        uri: this.data.urlToImage != null ?
                            this.data.urlToImage : '' 
                    }} />
                </Left>
                <Body>
                    <Text numberOfLines={2}>{this.data.title}</Text>
                    <Text note numberOfLines={2}>{this.data.description}</Text>
                    <View styles={styles.text}>
                        <Text note>{this.data.source.name}</Text>
                        <TimeAgo time={this.data.publishedAt}/>
                    </View>
                </Body>
                <Right>
                    <Button transparent>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 6
    }
});

export default DataItem;
