'use strict';
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';


const ExtraDetail = ({ extra }) => {
  const { time, title, description, picture_url } = extra;
  const {
    simagesStyle,
    sthumnailStyle,
    sheaderContentStyle,
    sthumbnailContainerStyle,
    sheaderTextStyle,
    descriptionStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={sheaderContentStyle}>

        <Text style={sheaderTextStyle}>{time}</Text>
        <Text></Text>
        <Text style={sheaderTextStyle}>{title}</Text>
        </View>
      </CardSection>

        <CardSection>
          <Image
            style={simagesStyle}
            source={{ uri: picture_url }} />
        </CardSection>

        <CardSection>
        <Text style={descriptionStyle}>{description}</Text>
        </CardSection>



    </Card>
  );
};
// style={headerContentStyle}
const styles = {
  sheaderContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#E2E1E4',
    paddingBottom: 20


  },

  descriptionStyle: {
    fontWeight: '500',
    fontSize: 22
  },
  sheaderTextStyle: {
    fontWeight: '600',
    fontSize: 25
  },
  sthumnailStyle: {
    height: 50,
    width: 50
  },
  sthumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  simagesStyle: {
    height: 300,
    backgroundColor: 'white',
    flex: 1,
    width: null
  }
};

export default ExtraDetail;
