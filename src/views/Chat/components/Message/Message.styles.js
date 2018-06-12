import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  messageContainer: {
    padding: 20,
    paddingBottom: 40,
    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0.3)',
    borderBottomWidth: 0.5,
  },
  leftContainer: {
    width: 50,
    marginRight: 20,
  },
  image: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    height: 50,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    color: '#007BB0',
  },
  timeText: {
    fontSize: 16,
    color: '#DBDBDB',
  },
  messageText: {
    fontSize: 14,
  },
});
