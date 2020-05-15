// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

// create a react components
const App = () => {
	return (
		<div className="ui container comments">
			<div className="comment">
				<a href="/" className="avatar">
					<img alt="avatar" src={faker.image.avatar()} />
				</a>
				<div className="content">
					<a href="/" className="author">
						Sam
					</a>
					<div className="metadata">
						<div className="date">Today 16:50</div>
					</div>
					<div className="text">
						Hey guys, I hope this example comment helpful.
					</div>
				</div>
			</div>
		</div>
	); //jsx syntax
};

// take react components and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
