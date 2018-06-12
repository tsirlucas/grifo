import React from 'react';
import {Provider} from 'react-redux';

import {Layout} from 'components';
import {store} from 'core';
import {Chat} from 'views';

export default () => (
  <Provider store={store}>
    <Layout>
      <Chat />
    </Layout>
  </Provider>
);
