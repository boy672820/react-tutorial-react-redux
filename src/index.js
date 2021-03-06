import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import counterApp from './reducers';
import './index.css';

const store = createStore( counterApp );

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById( 'root' )
);
