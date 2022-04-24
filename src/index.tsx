import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './Store/store';
import { Provider } from 'react-redux';
import Counter from './Components/Counter';
import Status from './Components/Status';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
      <Status />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);