// import
import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import FlipMove from 'react-flip-move';




// export/ class/ component creation
export default class PlayerList extends React.Component{
	// RENDER PLAYERS FUNCTION
	// Function that takes players and for each one, maps a paragraph listing each player
	renderPlayers(){
		// IF there are no players in the array,
		if(this.props.players.length === 0){
			return(
				<div className='item'>
					<p className='item__message item__message--empty'>Add some players to begin!</p>
				</div>
			);
		}else{
			return this.props.players.map((player) => {
				return <Player key={player._id} player={player}/>;
			});
		}
	}
	render(){
    return (
			<div>
				<FlipMove duration={350} easing="ease-out" maintainContainerHeight='true'>
					{this.renderPlayers()}
				</FlipMove>
			</div>
		);
	}
};



// This sets up a warning to throw if the title is not a string or doesnt exist
PlayerList.propTypes = {
	players: PropTypes.array.isRequired
};