import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ChatPresentational} from './Chat.presentational';
import {mapDispatchToProps, mapStateToProps} from './Chat.selectors';

const UnconnectedChat = (props) => (
  <ChatPresentational messages={props.messages} sendMessage={props.actions.sendMessage} />
);

UnconnectedChat.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const Chat = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnconnectedChat);
