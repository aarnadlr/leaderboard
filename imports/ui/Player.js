// IMPORT statements
import React from 'react';
import PropTypes from 'prop-types';
// Import MongoDB-related JS - "Named export": uses curly braces
import {Players} from './../api/players';



// COMPONENT Statement
// First Line: export statement AND component creation
export default class Player extends React.Component{
	render(){

		let itemClassName = `item item--position-${this.props.player.rank}`;

    return (
			<div className={itemClassName} key={this.props.player._id}>

				<div className='player'>
					<div>
						<h3 className='player__name'>{this.props.player.name}</h3>
						<p className='player__stats'>
							{this.props.player.position}
							&nbsp;place -&nbsp;
							{this.props.player.score} point(s).
						
						</p>
					</div>

					<div className='player__actions'>
						<button className='button button--round' onClick={() => {
							Players.update(this.props.player._id, {
								$inc: {score:-1}
							});
						}}>-1</button>

						<button className='button button--round' onClick={() => {
							Players.update(this.props.player._id, {
								$inc: {score:1}
							});
						}}>+1</button>

						<button className='button button--round' onClick= {() => Players.remove(this.props.player._id)}> X </button>
					</div>
					
				</div>

			</div>
		);
	}
};

// This sets up a warning to throw if the title is not a string or doesnt exist
Player.propTypes = {
	player: PropTypes.object.isRequired
};