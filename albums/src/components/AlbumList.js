import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import AlbumDetails from './AlbumDetails';


class AlbumList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: []
        }
    }

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    albums: res
                })
            })
    }

    render() {
        const styles = StyleSheet.create({
            albumList: {
                padding: 20,
            },
        })
        return (
            <View style={styles.albumList}>
                {this.state.albums.map((album) =>
                    <AlbumDetails key={album.title} album={album} />
                )}
            </View>
        )
    }
}
export default AlbumList;