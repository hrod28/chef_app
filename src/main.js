'use strict';
import React from 'react';
import {
  Navigator
} from 'react-native';


import LandingMenu from './components/LandingMenu';
import BrewerList from './components/BrewerList';
import VoteValidation from './components/VoteValidation';
import ChefList from './components/ChefList';
import VoteForm from './components/VoteForm';
import Map from './components/Map';
import DishesList from './components/DishesList';
import ScheduleList from './components/ScheduleList';
import SilentAuction from './components/SilentAuction';
import Special from './components/Special';
import signIn from './components/auth/signIn';
import signUp from './components/auth/signUp';
import chooseName from './components/auth/chooseName';
import forgotPassword from './components/auth/forgot-password';
import topics from './components/topics';
import topicDetail from './components/topic-detail';

const routes = {
  signIn,
  signUp,
  chooseName,
  forgotPassword,
  topics,
  Map,
  topicDetail,
  LandingMenu,
  BrewerList,
  ChefList,
  VoteForm,
  VoteValidation,
  DishesList,
  ScheduleList,
  SilentAuction,
  Special,
};

module.exports = React.createClass({
  render() {
    return (
      <Navigator
        initialRoute={{name: 'signIn'}}
        renderScene={this.renderScene}
      />
    );
  },

  renderScene(route, navigator) {
    let Component = routes[route.name];
    let {displayName, title, author, row_uid} = route;

    return (
      <Component
        navigator={navigator}
        displayName={displayName}
        title={title}
        author={author}
        row_uid={row_uid}
      />
    );
  }
});
