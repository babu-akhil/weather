import {apiKey} from './config.js'
import {mainDataView, createSearchBar} from './ui.js'
const style = require('./style.css')
// UI displaying API response in a intuitive way. Search functionality to input Location (Autocomplete in v2.0).
// Transition when location is changed.

// ICONS URL : http://openweathermap.org/img/wn/${weather[0].icon}@2x.png
// Wind Speeds in m/s convert to km/h. And temperature convert to Celsius

// Data Fetching / Update
async function getData(location) {
    try {let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    let data = await response.json()
    mainDataView(body, data);
    } catch {
        console.log("We've run into an error! Sorry :(")
    }
}

const data = getData('Texas')

let body = document.querySelector('body')

createSearchBar(body);

function search() {
    let searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('keyup', function(e) {
        console.log(e.key)
        if (e.keyCode===13) {
            if(document.getElementById('mainDataContainer')) {
            document.getElementById('mainDataContainer').style.opacity = 0
            }
            setTimeout(() =>{getData(searchBar.value)}, 2000);
        }
    })
}

search();