import {createAction} from 'redux-act';

export const actions = {
  sendMessage: createAction('chat/SEND_MESSAGE'),
};
