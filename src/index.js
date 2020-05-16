// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// create a react components
const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard />
			<CommentDetail
				author="Sam"
				timeAgo="Today at 4pm"
				comment="Hello mate"
				avatar={faker.image.avatar()}
			/>
			<CommentDetail
				author="Alex"
				timeAgo="Today at 6pm"
				comment="Whats up"
				avatar={faker.image.avatar()}
			/>
			<CommentDetail
				author="Jane"
				timeAgo="Yesterday at 8am"
				comment="Keep talking"
				avatar={faker.image.avatar()}
			/>
		</div>
	); //jsx syntax
};

// take react components and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
