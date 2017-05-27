'use strict';
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';


const SilentAuctionDetail = ({ auction }) => {
  const { title, description, picture_url } = auction;
  const {
    aimagesStyle,
    athumnailStyle,
    aheaderContentStyle,
    athumbnailContainerStyle,
    aheaderTextStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={athumbnailContainerStyle}>
          <Image
            style={athumnailStyle}
            source={{ uri: picture_url}}
          />
        </View>
        <View style={aheaderContentStyle}>
        <Text style={aheaderTextStyle}>{title}</Text>
        <Text></Text>
        </View>
      </CardSection>


      <CardSection>
        <Image
          style={aimagesStyle}
          source={{ uri: picture_url }} />
      </CardSection>

      <CardSection>

        <View style={aheaderContentStyle}>
          <Text>Item Description:</Text>
          <Text style={aheaderTextStyle}>{description}</Text>
        </View>
      </CardSection>

    </Card>
  );
};
// style={headerContentStyle}
const styles = {
  aheaderContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'white'
  },
  aheaderTextStyle: {
    fontWeight: '600',
    fontSize: 25
  },
  athumnailStyle: {
    height: 50,
    width: 50
  },
  athumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  aimagesStyle: {
    height: 300,
    backgroundColor: 'white',
    flex: 1,
    width: null
  }
};

export default SilentAuctionDetail;
