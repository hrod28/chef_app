'use strict';
import { StyleSheet } from 'react-native';

const grey = '#6B6B6B';
const green = '#CAC6D7';
const white = '#fff';
const black = '#000';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: grey,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: grey,
  },
  input: {
    backgroundColor: '#E2E34B',
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
    textAlign: 'center',
    fontWeight: '600'
  },
  signInInput: {
    backgroundColor: green,
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
    textAlign: 'center'
  },
  buttonContainer: {
    backgroundColor: '#E2E34B',
    justifyContent: 'center',
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2
  },
  headerContainer: {
    backgroundColor: white,
    justifyContent: 'center',
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2
  },
  button: {
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#E2E34B'

  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  link: {
    color: '#E2E34B',
    fontSize: 20
  },
  feedback: {
    textAlign: 'center'
  },

  //topics section
  flexContainer: {
    flex: 1,
    backgroundColor: '#6B6B6B'
  },
  header: {
    marginTop: 20,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  body: {
    flex: 10,
    paddingRight: 20,
    paddingLeft: 20
  },
  title: {
    textAlign: 'center',
    color: '#E8E8E8'
  },

  //list section
  list: {
    flex: 1
  },
  row: {
    alignItems: 'center',
    backgroundColor: '#E2E1E4',
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
    padding: 10
  },
  rowTitle: {
    fontWeight: 'bold',
    color: '#604B9D',
    fontSize: 20
  },

  //details section
  detailTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E2E34B'
  },
  detailSubtitle: {
    textAlign: 'center',
    fontSize: 14
  },
  comment: {
    color: '#604B9D',
    fontWeight: '600'
  },
  headerTextStyle: {
    fontWeight: '600',
    fontSize: 22
  },

  imageStyle: {
    height: 110,
    borderWidth: 1,
    flex: 1,
    width: null
  },
  signInImageStyle: {
    height: 110,
    flex: 1,
    width: null
  }
});
