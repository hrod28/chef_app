import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#604B9D',
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#E2E1E4',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
