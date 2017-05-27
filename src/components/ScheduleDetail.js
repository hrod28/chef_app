'use strict';
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';


const ScheduleDetail = ({ schedule }) => {
  const { time, title, description } = schedule;
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
        <Text>Time:</Text>
        <Text style={sheaderTextStyle}>{time}</Text>
        <Text></Text>
        <Text style={sheaderTextStyle}>{title}</Text>
        <Text></Text>
        <Text style={descriptionStyle}>{description}</Text>
        </View>
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

export default ScheduleDetail;
