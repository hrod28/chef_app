'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

import styles from '../../styles';
import {firebaseApp} from './authentication';
import { Card, CardSection, Input, Button, Spinner, Header } from '../common';

module.exports = React.createClass({
  getInitialState() {
    return({
      email: '',
      password: '',
      confirmPassword: '',
      result: ''
    })
  },

  signUp() {
    if (this.state.password == this.state.confirmPassword) {
      // do anything with creating a user
      let {email, password} = this.state;
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => this.setState({result: error.message}));
    } else {
      // set the result of state to password and confirm password need to match
      this.setState({result: 'Password and confirmation password must match.'})
    }
  },

  render() {
    return (
      <View style={styles.container}>

      

        <Text style={styles.feedback}>{this.state.result}</Text>
        <TextInput
          placeholder='Email'
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          placeholder='Password'
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry={true}
        />
        <TextInput
          placeholder='Confirm password'
          style={styles.input}
          onChangeText={(text) => this.setState({confirmPassword: text})}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.signUp()}
        >
          <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.links}>
          <TouchableOpacity onPress={() => this.props.navigator.pop()}>
            <Text style={styles.link}>Already a member? Sign in</Text>
          </TouchableOpacity>
        </View>
        <Image
        style={styles.imageStyle}
        source={{ uri: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/18739043_1869648039962890_2108622490133771646_o.png?oh=29ecc9656ecac9bb0f8e631903332c96&oe=59A01ABB' }} />
      </View>
    );
  }
});
