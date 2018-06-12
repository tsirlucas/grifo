import React from 'react';
import {View, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export class Textbox extends React.Component {
  state = {
    message: '',
  };

  onSend = () => {
    this.props.sendMessage({text: this.state.message, date: new Date()});
    this.setState({message: ''});
  };

  render() {
    const canSend = this.state.message.length > 0;

    return (
      <View style={styles.textbox}>
        <TextInput
          value={this.state.message}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Type your message..."
          multiline
          onChangeText={(text) => this.setState({message: text})}
        />
        <TouchableOpacity disabled={!canSend} onPress={this.onSend} style={styles.sendContainer}>
          <Text style={[styles.send, canSend ? null : {color: 'gray'}]}>Send</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Textbox.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textbox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  input: {
    borderRadius: 15,
    padding: 10,
    maxHeight: 150,
    fontSize: 14,
    flex: 1,
    backgroundColor: 'white',
  },
  sendContainer: {
    maxHeight: 70,
    alignSelf: 'center',
  },
  send: {
    alignSelf: 'center',
    color: '#26AADB',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
});
