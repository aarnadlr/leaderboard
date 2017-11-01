// The word after 'import'(utils) is a var which can be ANYTHING
// 1 IMPORT JS/LIBRARY CODE - Import React-related JS
import React from 'react';
import ReactDOM from 'react-dom';
// Meteor-related JS
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
// Import MongoDB-related JS - "Named export": uses curly braces
import {Players, calculatePlayerPositions} from './../imports/api/players';
// Import REACT COMPONENTS
// "Default export": does NOT use curly braces
import App from './../imports/ui/App';


// 2 METEOR STARTUP, TRACKER AUTORUN, JSX TO RENDER
// Main content rendering
Meteor.startup(() => {
	// Keep track of the players list and re-renders when anything changes
	Tracker.autorun(() => {
		// Retrieve all the MongoDB players data and place into 'players' var
		// '.fetch' converts the collection into an array
		let players = Players.find({},{
			// SETS ASCENDING OR DESCENDING ORDER!!
			// sort: {name: -1}
			sort: {score: -1}}).fetch();
		
		let positionedPlayers = calculatePlayerPositions(players);
		let title = 'ScoreKeepr';
		// RENDER JSX to the screen, wtih main rendering ROOT DIV
		// The main div in the main.html has an id of 'app'
		// PROPS designated in App.js must be added to the component here:
		ReactDOM.render(
			// APP COMPONENT
			<App title={title} players={positionedPlayers}/>,
			document.getElementById('app')
		);
	});
});

