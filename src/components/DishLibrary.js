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
import NewDishesDetail from './NewDishesDetail';
import styles from '../styles';

class DishLibrary extends Component {
  state = { newdishes: [] };

  componentWillMount() {
    axios.get('https://cap-backend.herokuapp.com/api/dishes')
         .then(response => this.setState({ newdishes: response.data }));
  }


  renderNewDishes() {
    return this.state.newdishes.map(newdish =>
      <NewDishesDetail key={newdish.plate_name} newdish={newdish} />
    );
  }

   render () {
     console.log(this.state);


    return (

    <Card>

      <ScrollView>
        {this.renderNewDishes()}
      </ScrollView>

    </Card>

    );
  }
}

export default DishLibrary;
