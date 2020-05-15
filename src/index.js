// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react components
const App = () => {
	return <div>hi there!</div>; //jsx syntax
};

// take react components and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
