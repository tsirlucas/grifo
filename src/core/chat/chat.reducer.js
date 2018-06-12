import {combineReducers} from 'redux';
import {createReducer} from 'redux-act';

import {actions} from './chat.actions';

const mockedDate = new Date();
mockedDate.setDate(mockedDate.getDate() - 2);

const mockedDate2 = new Date();
mockedDate2.setDate(mockedDate2.getDate() - 1);

const mockedMessages = [
  {
    text: 'Test',
    date: mockedDate,
  },
  {
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    date: mockedDate2,
  },
  {
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    date: mockedDate2,
  },
  {
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    date: mockedDate2,
  },
  {
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    date: mockedDate2,
  },
  {
    text:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    date: mockedDate2,
  },
  {
    text: 'Test end',
    date: mockedDate,
  },
];

export const initialState = {
  messages: mockedMessages,
};

const messages = createReducer({}, initialState.messages).on(
  actions.sendMessage,
  (state, payload) => [...state, payload],
);

export const chat = combineReducers({
  messages,
});
