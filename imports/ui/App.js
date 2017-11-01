// import
import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import PropTypes from 'prop-types';
// import Logo from 'leaderboard.svg';



//export/ class/ component
export default class App extends React.Component{
	render(){
		return(
			<div>
				{/* ALL COMPONENTS NESTED INTO HERE */}
				{/* The attributes below === 'PROPS' (Components and their props) */}
				<TitleBar title={this.props.title} subtitle='Enter your opponents and teammates. Update point counts. The rankings automagically re-order to show latest standings.' />
				<div className='wrapper'>
					{/* Render all the players in the Players db. */}
					<PlayerList players={this.props.players}/>
					<AddPlayer/>
				</div>

			</div>
		);
	}
};

// proptypes and requirement statements
App.propTypes = {
	title: PropTypes.string.isRequired,
	players: PropTypes.array.isRequired
}