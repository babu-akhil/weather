
import searchIcon from './searchIcon.png'

function createSearchBar(body) {
    let searchBarContainer = document.createElement('div')
    searchBarContainer.id = 'searchBarContainer'
    let searchBar = document.createElement('input')
    searchBar.id = 'searchBar'
    let submitSearch = document.createElement('button')
    let icon = document.createElement('img')
    icon.src = searchIcon
    submitSearch.appendChild(icon)
    searchBarContainer.appendChild(searchBar)
    searchBarContainer.appendChild(submitSearch)

    body.appendChild(searchBarContainer)
}


function mainDataView(body, data) {
    if(document.getElementById('mainDataContainer')) {
        document.getElementById('mainDataContainer').remove()
    }
    if(data.weather[0].icon.slice(-1)=='d') {body.style.backgroundColor = '#3F72AF'}
    else if(data.weather[0].icon.slice(-1)=='n'){body.style.backgroundColor = '#112D4E'}
    let mainDataContainer = document.createElement('div')
    mainDataContainer.id = 'mainDataContainer';

    let firstRow = makeFirstRow(data)
    mainDataContainer.appendChild(firstRow)

    let anotherRow = makeAnotherrow(data)
    mainDataContainer.appendChild(anotherRow)

    let secondRow = makeSecondRow(data)
    mainDataContainer.appendChild(secondRow)
    body.appendChild(mainDataContainer)
    body.style.transition = 'background-color 2s ease-in-out'
}

function kelvinToCelsius(tempKelvin) {
    return parseInt(tempKelvin -273.15);
}

function makeFirstRow(data) {
    let firstRow = document.createElement('div')
        firstRow.id = 'firstRow'

        let title = document.createElement('div')
        title.id = 'title'
        title.innerHTML = data.name

        let icon = document.createElement('img')
        icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        firstRow.appendChild(title)
        firstRow.appendChild(icon)
        return firstRow
}

function makeAnotherrow(data) {

    let anotherRow = document.createElement('div')
    anotherRow.id = 'anotherRow'

    let country = document.createElement('div')
    country.id = 'country'
    country.innerHTML = data.sys.country
    anotherRow.appendChild(country)

    let desc = document.createElement('div')
    desc.id = 'desc'
    desc.innerHTML = data.weather[0].description
    anotherRow.appendChild(desc)


    return anotherRow;

}

function makeSecondRow(data) {
    let secondRow = document.createElement('div')
    secondRow.id = 'secondRow'

    let temp = document.createElement('div');
    temp.id = 'temp'
    temp.innerHTML = kelvinToCelsius(data.main.temp) + '°C'

    let secondaryInfo = document.createElement('div')
    secondaryInfo.id = 'secondaryInfo'

    let feelsLike = document.createElement('div')
    feelsLike.id = 'feelsLike'
    feelsLike.innerHTML = 'Feels like: ' + kelvinToCelsius(data.main.feels_like).toString()+'°C'

    let wind = document.createElement('div')
    wind.id=  'wind'
    wind.innerHTML = 'Wind Speed: '+parseInt(data.wind.speed*3.6).toString() + 'km/h'

    let humidity = document.createElement('div')
    humidity.id = 'humidity'
    humidity.innerHTML = 'Humidity: '+data.main.humidity.toString() + '%'

    secondaryInfo.appendChild(feelsLike)
    secondaryInfo.appendChild(wind)
    secondaryInfo.appendChild(humidity)

    secondRow.appendChild(temp)
    secondRow.appendChild(secondaryInfo)

    return secondRow
}


export {createSearchBar, mainDataView}