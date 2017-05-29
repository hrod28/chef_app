'use strict';
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';


const ChefDetail = ({ chef }) => {
  const { name, restaurant, restaurant_logo, serving_photo, paired_logo, photo_url, restaurant_url, paired_with, serving_location } = chef;
  const {
    imagesStyle,
    thumnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumnailStyle}
            source={{ uri: restaurant_logo}}
          />
        </View>
        <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{name}</Text>
        <Text>{restaurant}</Text>
        </View>
      </CardSection>


      <CardSection>
        <Image
          style={imagesStyle}
          source={{ uri: photo_url }} />
      </CardSection>

      <CardSection>
      <View style={thumbnailContainerStyle}>
      <Image
      style={thumnailStyle}
      source={{ uri: paired_logo}}
      />
      </View>
      <View style={headerContentStyle}>
      <Text>Paired With:</Text>
      <Text style={headerTextStyle}>{paired_with}</Text>
      </View>
      </CardSection>

      <CardSection>
      <View style={thumbnailContainerStyle}>
      <Image
      style={thumnailStyle}
      source={{ uri: serving_photo}}
      />
      </View>
      <View style={headerContentStyle}>
      <Text>Serving From:</Text>
      <Text style={headerTextStyle}>{serving_location}</Text>
      </View>
      </CardSection>


      <CardSection>
        <Button onPress={() => Linking.openURL(restaurant_url)}>
          Where Can I find <Text>{name}</Text>
        </Button>
      </CardSection>
    </Card>
  );
};
// style={headerContentStyle}
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#E2E34B'
  },
  headerTextStyle: {
    fontWeight: '600',
    fontSize: 25
  },
  thumnailStyle: {
    height: 50,
    width: 50,

  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'black'
  },
  imagesStyle: {
    height: 300,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    flex: 1,
    width: null
  }
};

export default ChefDetail;
