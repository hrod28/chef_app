'use strict';
import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet,
  ListView,
  Image,
  Picker,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import CheckBox from 'react-native-checkbox';
import axios from 'axios';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';
import styles from '../styles';
import DishLibrary from './DishLibrary';

module.exports = React.createClass ({

  getInitialState () {
  return({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    visited_all: '',
    vote1: '',
    vote2: '',

  });
},


handleSubmit() {
  axios.post('https://cap-backend.herokuapp.com/api/users', {
    first_name: this.state.first_name,
    last_name:this.state.last_name,
    username: this.state.username,
    password: this.state.password,
    email: this.state.email,
    visited_all: this.state.visited_all,
    vote1: this.state.vote1,
    vote2: this.state.vote2
  })
    .then((response) => {

      // if (err || !res.ok) {
      //   console.log('ERROR: ', err);
      // } else {
      console.log('this');
        console.log(response);
    });
    this.props.navigator.push({name: 'VoteValidation'});

  },



  render() {
    return (
      <Card>

      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/17814533_777769615722762_813215094853927895_o.jpg?oh=ebe117ab59dcf2781bf8488bfc421a53&oe=595CFB47' }} />
      </CardSection>


        <View>
          <Header headerText="Cast Your Vote Here:" />
          <TouchableOpacity
            onPress={() => this.props.navigator.push({name: 'LandingMenu'})}
          >
            <Text style={styles.link}>
              Home
            </Text>
          </TouchableOpacity>
        </View>

      <ScrollView>
        <CardSection>
          <Input
            label="First Name:"
            placeholder="jane"
            style={styles.input}
            onChangeText={(text) => this.setState({first_name: text})}

          />
        </CardSection>

        <CardSection>
          <Input
            label="Last Name:"
            placeholder="doe"
            style={styles.input}
            onChangeText={(text) => this.setState({last_name: text})}

          />
        </CardSection>

        <CardSection>
        <Input
          label="Email:"
          placeholder="email@email.com"
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}

        />
        </CardSection>

        <CardSection>
          <Input
            label="username:"
            placeholder="runner53"
            style={styles.input}
            onChangeText={(text) => this.setState({username: text})}

          />
        </CardSection>
        <CardSection>
        <View>
        <Text>Did you stop and try all stations?</Text>
        </View>
        </CardSection>

        <CardSection>
          <Input
            label="Type yes if you tried all:"
            placeholder="YES or NO"
            style={styles.input}
            onChangeText={(text) => this.setState({visited_all: text})}

          />
          </CardSection>
          <CardSection>
          <View>
          <Text>Type No above if you did NOT try all stations</Text>
          </View>
          </CardSection>

        <CardSection>
          <View>

          </View>
        </CardSection>


      <ScrollView>

          <DishLibrary

          />

      </ScrollView>


        <CardSection>
          <Input
            label="Vote1:"
            placeholder="type dish name here"
            style={styles.input}
            onChangeText={(text) => this.setState({vote1: text})}

          />
        </CardSection>

        <CardSection>
          <Input
            label="Vote2:"
            placeholder="type dish name here"
            style={styles.input}
            onChangeText={(text) => this.setState({vote2: text})}

          />
        </CardSection>


        <CardSection>
          <Button onPress={() => this.handleSubmit()}>
            Submit Your Vote
          </Button>
        </CardSection>

        <Card>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={{ uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/17814533_777769615722762_813215094853927895_o.jpg?oh=ebe117ab59dcf2781bf8488bfc421a53&oe=595CFB47' }} />
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
});
