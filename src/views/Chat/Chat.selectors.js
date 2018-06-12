import {bindActionCreators} from 'redux';

import {actions} from 'core/chat';

export const mapStateToProps = (state) => ({
  messages: state.chat.messages,
});

export const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({sendMessage: actions.sendMessage}, dispatch),
});
