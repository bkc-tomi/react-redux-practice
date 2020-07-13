import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import todoReducer from "./reducers/todoReducers";
import textReducer from "./reducers/textReducers";

const rootReducer = combineReducers({
  todo: todoReducer,
  text: textReducer,
})

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
