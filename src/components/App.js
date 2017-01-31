import React, { Component } from 'react';
import Counter from './Counter';
import Option from './Option';
import Buttons from './Buttons';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Counter />
				<Option />
				<Buttons />
			</div>
		);
	}
}

export default App;
