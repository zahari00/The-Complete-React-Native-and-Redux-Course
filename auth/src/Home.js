import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './components';
import LoginForm from './auth/LoginForm';
import Logout from './auth/Logout';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthed: false,
            loading: true
        }

        firebase.initializeApp({
            apiKey: "AIzaSyBwjpvaoV57qEQkJJksYAugKmkTf8g1ek0",
            authDomain: "react-native-auth-81f27.firebaseapp.com",
            databaseURL: "https://react-native-auth-81f27.firebaseio.com",
            projectId: "react-native-auth-81f27",
            storageBucket: "react-native-auth-81f27.appspot.com",
            messagingSenderId: "1068160691357",
            appId: "1:1068160691357:web:d3c70fbcd05b961e"
        })

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ isAuthed: true, loading: false })
                return;
            }
            this.setState({ isAuthed: false, loading: false })
        })
    }


    renderElement() {
        if(this.state.loading) {
            return <View style={{ paddingTop: 50 }}><Spinner /></View>
        } else if(this.state.isAuthed) {
            return <Logout />
        }
        return <LoginForm />
    }

    render() {

        return (
            <View>
                <Header headerText={'Auth'} />
                {this.renderElement()}
            </View>
        )
    }
}
export default Home;