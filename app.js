import { config } from './config.js';
let summonerPuuid;


// get reference to the search player-button
const searchPlayerBtn = document.getElementById('search-player-btn').addEventListener('click',searchSummonerInfo);

// make search player function that fetches api call and does all the .then blocks
function searchSummonerInfo(){

    const API_KEY = config['API KEY'];
    const inputtedSummonerName = document.getElementById('summoner-name-textbox').value;
    const selectedServer = document.getElementById('server-list').value;
    console.log(selectedServer);
    const apiCallSummonerName = 'https://'+selectedServer+'.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+inputtedSummonerName+'?api_key='+API_KEY
    console.log(API_KEY);

    fetch(apiCallSummonerName)
    .then(handleResponse)
    .then(updateSummonerInfo)
    .catch(handleError);
    
    console.log(summonerPuuid)

}


function handleResponse(response){
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();

}

function updateSummonerInfo(data) {
    
    const displaySummonerName = document.getElementById('summoner-name');
    const summonerNameResult = data.name;
    console.log('Summoner name: ' +summonerNameResult)
    displaySummonerName.textContent = 'Summoner name: ' + summonerNameResult;

    const summonerLevel = data.summonerLevel;
    console.log(summonerLevel);
    const displaySummonerLevel = document.getElementById('summoner-level');
    displaySummonerLevel.textContent = 'Summoner level: ' + summonerLevel;

    summonerPuuid = data.puuid;
    
}

function handleError(error) {
    // Handle errors
    console.error('Error:', error);
}
