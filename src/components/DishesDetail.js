'use strict';
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';


const DishesDetail = ({ dish }) => {
  const { plate_name, prepared_by, description, ingredients, photo_url, paired_with, paired_logo, paired_with_desc, servedfrom, servedfrom_logo, location_url } = dish;
  const {
    dimagesStyle,
    dthumnailStyle,
    dheaderContentStyle,
    dthumbnailContainerStyle,
    dheaderTextStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={dthumbnailContainerStyle}>
          <Image
            style={dthumnailStyle}
            source={{ uri: paired_logo}}
          />
        </View>
        <View style={dheaderContentStyle}>
        <Text style={dheaderTextStyle}>{plate_name}</Text>
        <Text>{prepared_by}</Text>
        </View>
      </CardSection>


      <CardSection>
        <Image
          style={dimagesStyle}
          source={{ uri: photo_url }} />
      </CardSection>

      <CardSection>
          <View style={dheaderContentStyle}>
          <Text>description of dish</Text>
          <Text style={dheaderTextStyle}>{description}</Text>
          <Text>ingredients</Text>
          <Text style={dheaderTextStyle}>{ingredients}</Text>
          </View>
      </CardSection>

      <CardSection>
      <View style={dthumbnailContainerStyle}>
      <Image
      style={dthumnailStyle}
      source={{ uri: paired_logo}}
      />
      </View>
      <View style={dheaderContentStyle}>
      <Text>Paired With:</Text>
      <Text style={dheaderTextStyle}>{paired_with}</Text>
      <Text>desc of pairing:</Text>
      <Text style={dheaderTextStyle}>{paired_with_desc}</Text>
      <Text></Text>
      </View>


      </CardSection>

      <CardSection>
      <View style={dthumbnailContainerStyle}>
      <Image
      style={dthumnailStyle}
      source={{ uri: servedfrom_logo}}
      />
      </View>

      <View style={dheaderContentStyle}>
      <Text>Served From:</Text>
      <Text style={dheaderTextStyle}>{servedfrom}</Text>
      </View>
      </CardSection>


      <CardSection>
        <Button onPress={() => Linking.openURL(location_url)}>
          Where can I find <Text>{plate_name}</Text>
        </Button>
      </CardSection>
    </Card>
  );
};
// style={headerContentStyle}
const styles = {
  dheaderContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#E2E34B'
  },
  dheaderTextStyle: {
    fontWeight: '600',
    fontSize: 25
  },
  dthumnailStyle: {
    height: 50,
    width: 50,
    borderWidth: 2
  },
  dthumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    // borderWidth: 2,
    borderColor: 'black',
    // backgroundColor: '#E2E1E4'
  },
  dimagesStyle: {
    height: 300,
    backgroundColor: 'white',
    flex: 1,
    width: null,
    // borderWidth: 2,
    borderColor: 'black'
  }
};

export default DishesDetail;
