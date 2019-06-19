import React from 'react';
import { Text } from 'react-native';

import { CardItem, Card, Button, Input, Spinner } from '../components';
import firebase from 'firebase';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            message: '',
            loading: false
        }
    }

    onSubmit() {
        const { email, password } = this.state;

        this.setState({
            loading: true,
            message: ''
        })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({
                    email: '',
                    password: '',
                    loading: false,
                    message: 'Logged in!'
                })
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    message: 'Invalid credentials!'
                })
            });
    }

    renderButton() {
        if(this.state.loading) {
            return <Spinner size="small" />
        }
        return <Button onPress={this.onSubmit.bind(this)}>Log in</Button>
    }
    render() {

        return (
            <Card>
                <CardItem>
                    <Input isSecure={false} value={this.state.email} onChange={text => this.setState({ email: text })} label='Email:' placeholder="user@mail.com" />
                </CardItem>
                <CardItem>
                    <Input isSecure={true} value={this.state.password} onChange={text => this.setState({ password: text })} label='Password:' placeholder="password..." />
                </CardItem>
                <CardItem>
                    {this.renderButton() }
                </CardItem>

                <Text>{this.state.message}</Text>
            </Card>
        )
    }
}
export default LoginForm;