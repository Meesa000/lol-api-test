import { config } from './config.js';


// get reference to the search player-button
const searchPlayerBtn = document.getElementById('search-player-btn').addEventListener('click',searchSummonerName);

// make search player function that fetches api call and does all the .then blocks
function searchSummonerName(){

    const API_KEY = config.API_KEY;
    console.log(API_KEY)
    console.log('Search player button clicked!')
    let inputtedSummonerName = document.getElementById('search-player').valueof;
    const apiSummonerName = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+inputtedSummonerName


}
    // get the value of the search bar
// make another function that gets the response in a json format
// another func to handle the data for summoner name and updates the text content 
