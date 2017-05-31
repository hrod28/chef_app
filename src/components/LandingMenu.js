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

class LandingMenu extends Component {

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
          onPress={() => this.signOut()}
          >
          <Text style={styles.link}>
          Sign out
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => this.signOut()}
          >
          <Text style={styles.link}>

          </Text>
          </TouchableOpacity>


        </View>

      <ScrollView>
        <CardSection>


          <Button onPress={() => this.props.navigator.push({name: 'topics'})}>
            Join Discussion
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.props.navigator.push({name: 'ChefList'})}>
            Discover Chefs
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.props.navigator.push({name: 'DishesList'})}>
            Today's Menu
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.props.navigator.push({name: 'ExtraList'})}>
            Extra Perks
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.props.navigator.push({name: 'BrewerList'})}>
            Meet the Brewer
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.props.navigator.push({name: 'ScheduleList'})}>
            Event Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.props.navigator.push({name: 'Map'})}>
            Event Map
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.props.navigator.push({name: 'VoteForm'})}>
            Cast Your Vote!
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.props.navigator.push({name: 'SilentAuction'})}>
            Silent Auction Sneak Peek
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.props.navigator.push({name: 'Special'})}>
            Special Thanks
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL('https://www.coloradogives.org/index.php?section=organizations&action=newDonation&fwID=27589')}>
            Click Here to Donate
          </Button>
        </CardSection>

        <Card>
          <CardSection>
            <Button onPress={() => Linking.openURL('http://thefamilycenterfc.org/?page_id=120')}>
              Click Here to Learn More About The Family Center
            </Button>
          </CardSection>
        </Card>

        <Card>
        <CardSection>
        <Image
        style={styles.imageStyle}
        source={{ uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/17814533_777769615722762_813215094853927895_o.jpg?oh=ebe117ab59dcf2781bf8488bfc421a53&oe=595CFB47' }} />
        </CardSection>
        </Card>

      </ScrollView>
      </Card>
    );
  }
}

export default LandingMenu;
