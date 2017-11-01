import React from 'react';
import PropTypes from 'prop-types';
// import AAlogo from './../LEADERBOARD';

// FIRST REACT COMPONENT: JSX REQUIRES UPPERCASE FOR COMPONENTS!
export default class TitleBar extends React.Component{
	renderSubtitle(){
		if(this.props.subtitle){
			return <h2 className='title-bar__subtitle'>{this.props.subtitle}</h2>
		}
	}

	render(){
		return (
			// 'this.props' holds all of your defined key-value pairs in main.js CLIENT
			// CSS class in JSX = 'className'
			<div className='title-bar'>
				<div className='wrapper'>
					{<img src="./../leaderboard2.svg"/>}
					{/* <Logo/> */}
					{/* Dynamically pass data into a component to render to screen */}
					{/* {<h1>{this.props.title}</h1>} */}
					<div className='title-bar__subtitle'>
					{this.renderSubtitle()}
					</div>
						
				</div>
			</div>
		);
	}
}

// This sets up a warning to throw if the title is not a string or doesnt exist
TitleBar.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string
};

// TitleBar.defaultProps = {
// 	title: 'Default title'
// };