// import statement
import React from 'react';
// Import MongoDB-related JS - "Named export": uses curly braces
import {Players} from './../api/players';


// ADD PLAYER COMPONENT
// First Line: export statement AND component creation
export default class AddPlayer extends React.Component{
	
	// Add handleSubmit as a METHOD of AddPlayer
	// INPUT / NEW PLAYER FORM FUNCTIONALITY
	handleSubmit(e){
		// The target element = the form
		let playerName = e.target.playerName.value;
		// prevents the full page refresh when the submit button is clicked 
		e.preventDefault();
		
	// if the input is not empty
		if(playerName){
			// Clear the input form to an empty string
			e.target.playerName.value = '';
			// Insert into Players a new object (document) with key:value pairs
			Players.insert({
				name: playerName,
				score: 0
			});
	}
	}
	// Add render as a METHOD of AddPlayer
	render(){
		return (
			<div className='item'>
				{/* // If you pass in a component method (ie handleSubmit) to an event listener (ie onSubmit), you need to manually define the this binding with .bind(this) */}
				<form className='form' onSubmit={this.handleSubmit.bind(this)}>
					<input className='form__input' type="text" name="playerName" placeholder="Player Name"/>
					<button className='button'>Add Player</button>
				</form>
			</div>
		);
	}
}