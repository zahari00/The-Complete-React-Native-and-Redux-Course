import React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import SingleLibrary from './SingleLibrary';

class LibraryList extends React.Component {
    constructor(props) {
        super(props)
    }

    renderItem({ item }) {
        return (
            <SingleLibrary data={item} />
        );
    }

    render() {
        return <FlatList data={this.props.libraries} renderItem={this.renderItem} keyExtractor={(lib) => lib.id + lib.title} />
    }
}

// map the state to props, returns the needed data from the state, currently state.libraries
const mapStateToProps = state => {
    return { libraries: state.libraries }
}

// connect react component to the redux store
export default connect(mapStateToProps)(LibraryList);