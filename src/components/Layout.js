import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Header} from './Header';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.select({android: StatusBar.currentHeight, ios: 0}),
  },
});

export const Layout = ({children}) => (
  <SafeAreaView style={styles.container}>
    <Header />
    {children}
  </SafeAreaView>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
