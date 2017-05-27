'use strict';
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';


const SpecialDetail = ({ special }) => {
  const { thanks_name, description, photo_url, business_link } = special;
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
            source={{ uri: photo_url}} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{thanks_name}</Text>
        </View>
      </CardSection>


      <CardSection>
        <Image
          style={imagesStyle}
          source={{ uri: photo_url }} />
      </CardSection>

      <CardSection>
        <View style={headerContentStyle}>
          <Text></Text>
          <Text style={headerTextStyle}>{description}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(business_link)}>
          Visit <Text>{thanks_name}'s</Text> Website
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
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imagesStyle: {
    height: 300,
    backgroundColor: 'white',
    flex: 1,
    width: null
  }
};

export default SpecialDetail;
