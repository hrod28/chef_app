'use strict';
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';


const NewDishesDetail = ({ newdish }) => {
  const { plate_name, prepared_by, description, ingredients, photo_url, paired_with, paired_logo, paired_with_desc, servedfrom, servedfrom_logo, location_url } = newdish;
  const {
    notedimagesStyle,
    ndthumnailStyle,
    ndheaderContentStyle,
    ndthumbnailContainerStyle,
    ndheaderTextStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={ndthumbnailContainerStyle}>
          <Image
            style={ndthumnailStyle}
            source={{ uri: photo_url}}
          />
        </View>
        <View style={ndheaderContentStyle}>
          <Text style={ndheaderTextStyle}>{plate_name}</Text>
          </View>
          <View style={ndheaderContentStyle}>
          <Text >prepared by:</Text>
          <Text >{prepared_by}</Text>
        </View>
      </CardSection>
    </Card>
  );
};
// style={headerContentStyle}
const styles = {
  ndheaderContentStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#E2E1E4'
  },
  ndheaderTextStyle: {
    fontWeight: '600',
    fontSize: 25
  },
  ndchefTextStyle: {
    fontWeight: '200',
    fontSize: 25
  },
  ndthumnailStyle: {
    height: 50,
    width: 50
  },
  ndthumbnailContainerStyle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginRight: 10
  },
  ndimagesStyle: {
    height: 300,
    backgroundColor: 'white',
    flex: 1,
    width: null
  }
};

export default NewDishesDetail;
