import React from 'react';
import {Text, View, Image} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import {styles} from './Message.styles';

export const Message = ({message}) => (
  <View style={styles.messageContainer}>
    <View style={styles.leftContainer}>
      <Image
        style={styles.image}
        source={{uri: 'https://api.adorable.io/avatars/285/tsirlucas@gmail.com.png'}}
      />
    </View>
    <View style={styles.rightContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.nameText}>Lucas</Text>
        <Text style={styles.timeText}>
          {moment(message.date)
            .startOf('minute')
            .fromNow()}
        </Text>
      </View>
      <View>
        <Text style={styles.messageText}>{message.text}</Text>
      </View>
    </View>
  </View>
);

Message.propTypes = {
  message: PropTypes.object.isRequired,
};
