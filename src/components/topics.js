'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from '../styles';
import {firebaseApp, topicsRef} from './auth/authentication';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

module.exports = React.createClass({
  getInitialState() {
    return({
      displayName: '',
      title: '',
      dataSource: ds.cloneWithRows([{
        title: '',
        author: ''
      }])
    });
  },

  componentDidMount() {
    let user = firebaseApp.auth().currentUser;

    if (!user.displayName) {
      this.props.navigator.push({
        name: 'chooseName'
      });
    } else {
      // proceed normally with application
      this.setState({
        displayName: user.displayName
      });

      this.listenForItems(topicsRef);
    }
  },

  listenForItems(ref) {
    ref.on('value', (snap) => {
      let topics = [];
      snap.forEach(topic => {
        topics.push({
          title: topic.val().title,
          author: topic.val().author,
          key: topic.key
        });
      });
      this.setState({dataSource: ds.cloneWithRows(topics)});
    });
  },

  signOut() {
    // sign out the user
    firebaseApp.auth().signOut()
      .then(() => {
        // Sign out successful
        this.props.navigator.popToTop();
      }, (error) => {
        console.log(error);
      });
  },

  details(data) {
    this.props.navigator.push({
      name: 'topicDetail',
      displayName: this.state.displayName,

      title: data.title,
      author: data.author,

      row_uid: data.key
    });
  },

  renderRow(rowData) {
    return (
      <TouchableOpacity style={styles.row}
        onPress={() => this.details(rowData)}
      >
        <Text style={styles.rowTitle}>
          {rowData.title}
        </Text>
        <Text>
          {rowData.author}
        </Text>
      </TouchableOpacity>
    );
  },

  addTopic() {
    topicsRef.push({
      title: this.state.title,
      author: this.state.displayName
    });
  },

  render() {
    return (

      <View style={styles.flexContainer}>
      <View>
      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/17814533_777769615722762_813215094853927895_o.jpg?oh=ebe117ab59dcf2781bf8488bfc421a53&oe=595CFB47' }} />
      </CardSection>
      </View>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigator.push({name: 'LandingMenu'})}
          >
            <Text style={styles.link}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => this.props.navigator.push({name: 'LandingMenu'})}
          >
          <Text style={styles.link}>
          Home
          </Text>
          </TouchableOpacity>
          <Text style={styles.title}>
            {this.state.displayName}
          </Text>
        </View>
        <View>
          <Text style={styles.slink}>Click on a topic below to comment</Text>
        </View>




        <View style={styles.body}>

          <TextInput
            placeholder='click here to join the discussion'
            style={styles.input}
            onChangeText={(text) => this.setState({title: text})}
            onEndEditing={() => this.addTopic()}
          />
          <ListView
            style={styles.list}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.renderRow(rowData)}
          />
        </View>
      </View>

    );
  }
});
