import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App/App';
import './style/index.scss';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    {/* TODO: Store не нужен */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
