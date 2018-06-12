import {combineReducers} from 'redux';

import {chat} from './chat/chat.reducer';

const rootReducerObj = {chat};

export const rootReducer = combineReducers(rootReducerObj);
