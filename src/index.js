// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react components
const App = () => {
	return (
		<div>
			<label class="label" for="name">
				Enter name:
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>
				Submit
			</button>
		</div>
	); //jsx syntax
};

// take react components and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
