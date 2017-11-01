// import the mongo API:
import {Mongo} from 'meteor/mongo';
import Numeral from 'numeral';

// Players  = MONGODB collection - (Constructor function)
// parameter = the name of the collection you want to create
export const Players = new Mongo.Collection('players');

// RANK PLAYERS BY NUMBER OF POINTS AT ANY MOMENT
export const calculatePlayerPositions = (players) => {
	let rank = 1;
	// Modify each player in the array
	return players.map((player, index) => {
		if(index !== 0 && players[index - 1].score > player.score){
			rank++;
		}
		return {
			...player,
			rank,
			position: Numeral(rank).format('0o')
		};
	});
};