import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Input, Button, Spinner } from './common';
import { change, logIn } from '../actions';

class Login extends Component {
  render() {
    const { change, data, logIn } = this.props

    return (
      <Card>
        <CardItem>
          <Input label="Email" name="email" placeholder="email@mail.com"
            onChange={change} value={data.email} />
        </CardItem>
        <CardItem>
          <Input label="Password" value={data.password} name="password"
            onChange={change} placeholder="Password" isSecure />
        </CardItem>
        <CardItem>
          {data.loading ? <Spinner /> :
            <Button onPress={() => logIn(data.email, data.password)}>Login</Button>
          }
        </CardItem>
        {data.error ? <CardItem><Text>{data.error}</Text></CardItem> : null}
      </Card>
    );
  }
}

const mapStateToProps = (state) => { return { data: state.auth } }
export default connect(mapStateToProps, { change, logIn })(Login);
