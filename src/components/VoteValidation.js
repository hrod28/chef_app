'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Linking,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

import {firebaseApp, topicsRef} from './auth/authentication';
import styles from '../styles';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';

class VoteValidation extends Component {

  signOut() {
    // sign out the user
    firebaseApp.auth().signOut()
      .then(() => {
        // Sign out successful
        this.props.navigator.popToTop();
      }, (error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Card>
          <CardSection>
            <Image
              style={styles.imageStyle}
              source={{ uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/17814533_777769615722762_813215094853927895_o.jpg?oh=ebe117ab59dcf2781bf8488bfc421a53&oe=595CFB47' }} />
          </CardSection>

        <View>
        <Header headerText="Home Menu" />





            <TouchableOpacity
            onPress={() => this.props.navigator.push({name: 'LandingMenu'})}
            >
            <Text style={styles.link}>
            Home
            </Text>
            </TouchableOpacity>

          </View>



      <ScrollView>
      <Card>
        <CardSection>
          <Text>Your Vote has been Sucessully Recorded!  Click on the Home link to return to the main menu page</Text>
        </CardSection>
      </Card>


      </ScrollView>
      </Card>
    );
  }
}

export default VoteValidation;
