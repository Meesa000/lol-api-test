import { config } from './config.js';


// get reference to the search player-button
const searchPlayerBtn = document.getElementById('search-player-btn').addEventListener('click',searchSummonerName);

// make search player function that fetches api call and does all the .then blocks
function searchSummonerName(){

    const API_KEY = config.API_KEY;
    let inputtedSummonerName = document.getElementById('summoner-name-textbox').value;
    const apiCallSummonerName = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+inputtedSummonerName+'?api_key='+API_KEY

    fetch(apiCallSummonerName)
    .then(handleResponse)
    .then(updateSummonerName)
    .catch(handleError);
    

}

function handleResponse(response){
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();

}

function updateSummonerName(data) {
    const summonerNameResult = data.name;
    console.log(summonerNameResult)
}

function handleError(error) {
    // Handle errors
    console.error('Error:', error);
}
