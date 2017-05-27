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
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';
import MapDetail from './MapDetail';
import styles from '../styles';

class MapList extends Component {
  state = { mmaps: [] };

  componentWillMount() {
    axios.get('https://cap-backend.herokuapp.com/api/votes')
         .then(response => this.setState({ mmaps: response.data }));
  }


  renderMaps() {
    return this.state.mmaps.map(mmap =>
      <MapDetail key={mmap.map_photo} mmap={mmap} />
    );
  }

  render () {
    console.log(this.state);


    return (

      <Card>

      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/17814533_777769615722762_813215094853927895_o.jpg?oh=ebe117ab59dcf2781bf8488bfc421a53&oe=595CFB47' }} />
      </CardSection>

        <View>
          <Header headerText="Event Map:" />
          <TouchableOpacity
            onPress={() => this.props.navigator.push({name: 'LandingMenu'})}
          >
            <Text style={styles.link}>
              Home
            </Text>
          </TouchableOpacity>
        </View>



      <ScrollView>
        {this.renderMaps()}
      </ScrollView>

      </Card>

    );
  }
}

export default MapList;
