
const submitButton = document.getElementById('submit').addEventListener('click',searchForPlayer);
const displaySummonerName = document.getElementById('summoner-name');






function searchForPlayer(){

    const summonerName = document.getElementById('search-player').value;
    const apiURL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+summonerName+'?api_key='+API_KEY

    fetch(apiURL)
    .then(handleResponse)
    .then(updateSummonerName)
    .catch(handleError);
}

function handleResponse(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Call json() here to parse the response body as JSON
}

function updateSummonerName(data) {
    // Access the 'name' property from the parsed JSON data
    const summonerNameResult = data.name;

    // Update the <h3> element with the summoner name
    const h3Element = document.getElementById('summoner-name');
    h3Element.textContent = `Summoner Name: ${summonerNameResult}`;
}

function handleError(error) {
    // Handle errors
    console.error('Error:', error);
}
