'use strict';
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';


const MapDetail = ({ mmap }) => {
  const { map_photo } = mmap;
  const {
    mimagesStyle,
    mthumnailStyle,
    mheaderContentStyle,
    mthumbnailContainerStyle,
    mheaderTextStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={mheaderContentStyle}>
          <Text style={mheaderTextStyle}>Map to Yummy Treasures:</Text>
          <Image
            style={mimagesStyle}
            source={{ uri: map_photo }} />
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL('http://chef-admin.surge.sh/mapMarker.html')}>
          Find This Event on Google Maps
        </Button>
      </CardSection>


      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/17814533_777769615722762_813215094853927895_o.jpg?oh=ebe117ab59dcf2781bf8488bfc421a53&oe=595CFB47' }} />
      </CardSection>



      <CardSection>
      <Image
      style={styles.imageStyle}
      source={{ uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/17814533_777769615722762_813215094853927895_o.jpg?oh=ebe117ab59dcf2781bf8488bfc421a53&oe=595CFB47' }} />
      </CardSection>

      </Card>
  );
};
// style={headerContentStyle}
const styles = {
  mheaderContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'white'
  },
  mheaderTextStyle: {
    fontWeight: '600',
    fontSize: 25
  },
  mthumnailStyle: {
    height: 50,
    width: 50
  },
  mthumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  mimagesStyle: {
    height: 300,
    backgroundColor: 'white',
    flex: 1,
    width: null
  }
};

export default MapDetail;
