import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header = () => (
  <View style={styles.header}>
    <Text style={styles.text}>Talk to us</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingHorizontal: 20,
    maxHeight: 70,
    minHeight: 70,
    flexDirection: 'column',
    backgroundColor: '#26AADB',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 22,
  },
});
