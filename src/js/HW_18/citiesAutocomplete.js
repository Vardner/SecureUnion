function activateCitiesAutocomplete() {
  const input = document.querySelector('[data-input="cities-search-weather"');



   const options = {
    types: ['(cities)'],
    fields: ['place_id', 'name']
  };

  const autocomplete = new google.maps.places.Autocomplete(input, options);
  autocomplete.setFields(['name']);

  autocomplete.addListener('place_changed', () => {console.log(autocomplete.getPlace())});
}

const cityWeatherForm = document.querySelector('[data-form="city-weather"');
const cityWeatherIconElem = document.querySelector('[data-container="city-weather"] > i');

cityWeatherIconElem.addEventListener('click', showWeatherSearchForm);
cityWeatherForm.addEventListener('submit', getForecast);

function showWeatherSearchForm (e) {
  e.currentTarget.parentElement.classList.add('active');
}

function validateInputText () {
  const input = document.querySelector('[data-input="cities-search-weather"');
  const re = /^[a-z]*$/i;

  if(!re.test(input.value)) {
    const errorMessage = document.createElement('span');
    errorMessage.className = 'Header-weatherError';
    errorMessage.innerHTML = 'English only!';
    input.parentElement.appendChild(errorMessage);
    setTimeout(() => input.parentElement.removeChild(errorMessage), 4000);
    return false
  }

  return true;
}

function getForecast (e) {
  e.preventDefault();
  if (validateInputText()) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${PARAM}&APPID=62840a2fcf2442723cd7d5e414369dc1`, true)
  }
}