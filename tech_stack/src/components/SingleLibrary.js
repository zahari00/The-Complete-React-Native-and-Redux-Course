import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, LayoutAnimation, UIManager } from 'react-native';
import { CardItem, Card } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);


class Library extends React.Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
        LayoutAnimation.spring();

    }
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.data.id)}>
                <View>
                    <Card>
                        <CardItem>
                            <Text style={styles.title}>
                                {this.props.data.title}
                            </Text>
                        </CardItem>
                        {this.props.expanded
                            ?
                            <CardItem>
                                <Text style={styles.title}>
                                    {this.props.data.description}
                                </Text>
                            </CardItem>
                            :
                            null}
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        paddingLeft: 15
    },
})

// map the state to props, returns the needed data from the state, currently state.libraries
const mapStateToProps = (state, ownProps) => {
    return {
        expanded: state.selectedLibraryId === ownProps.data.id
    }
}

// connect react component to the redux store
export default connect(mapStateToProps, actions)(Library);