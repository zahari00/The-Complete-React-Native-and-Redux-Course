import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';


function AlbumDetails({ album }) {
    return (
        <Card>
            <CardItem>
                <View>
                    <Image style={{ width: 50, height: 50, marginRight: 10 }} source={{ uri: album.thumbnail_image }} />
                </View>
                <View>
                    <Text style={{ fontSize: 18 }}>{album.title}</Text>
                    <Text>{album.artist}</Text>
                </View>
            </CardItem>
            <CardItem>
                <Image style={{ width: '100%', height: 300, marginRight: 10 }} source={{ uri: album.image }} />
            </CardItem>
            <CardItem>
                <Button onPress={() => Linking.openURL(album.url)}>Buy</Button>
            </CardItem>
        </Card>
    )

}
export default AlbumDetails;