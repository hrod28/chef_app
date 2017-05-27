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
        source={{ uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13620808_510156309173515_2481120937157259819_n.jpg?oh=43ce736ec4611b24a8197978e15bd1c3&oe=59523D01' }} />
      </View>
    );
  }
});
