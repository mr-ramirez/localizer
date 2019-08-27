import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/styles';
import 'typeface-roboto';
import 'babel-polyfill';
import App from './containers/App/components/index.jsx';
import { store } from './store';
import * as serviceWorker from './serviceWorker';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <App />
    </Provider>
  </StylesProvider>,
  rootElement,
);

serviceWorker.unregister();
