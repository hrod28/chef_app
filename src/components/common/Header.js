'use strict';

import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#E2E1E4',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    height: 60,
    paddingTop: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: '#604B9D',
    fontSize: 20,
    fontWeight: '600'

  }
};

export { Header };
