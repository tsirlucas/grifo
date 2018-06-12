import React from 'react';
import {KeyboardAvoidingView, FlatList, View} from 'react-native';
import PropTypes from 'prop-types';
import {StateProvider} from 'components';
import {styles} from './Chat.styles';
import {Message, Textbox} from './components';

const Messages = StateProvider(({messages}) => (
  <View style={styles.container}>
    <FlatList
      ref={(ref) => (this.scrollView = ref)}
      data={messages}
      renderItem={({item}) => <Message message={item} />}
      keyExtractor={(_item, index) => index.toString()}
      onLayout={() => {
        this.scrollView.scrollToEnd({animated: true});
      }}
      onContentSizeChange={() => {
        this.scrollView.scrollToEnd({animated: true});
      }}
    />
  </View>
));

export const ChatPresentational = ({messages, sendMessage}) => (
  <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <Messages messages={messages} />
    <Textbox sendMessage={sendMessage} />
  </KeyboardAvoidingView>
);

const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  sendMessage: PropTypes.func.isRequired,
};

ChatPresentational.propTypes = propTypes;
Messages.propTypes = {messages: propTypes.messages};
