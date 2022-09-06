const API_KEY = "867b70528137cb48ebf7bb365374a87c";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
  fetch(url)
  .then(response=>response.json())
  .then((data)=>{
    const weatherSpan = document.querySelector("#weather span:first-child");
    const citySpan = document.querySelector("#weather span:last-child");
    citySpan.innerText = `Current Location: ${data.name}`;
    weatherSpan.innerText =`Weather: ${data.weather[0].main}/Temp: ${data.main.temp}/Humidity: ${data.main.humidity}`;})

  }

function onGeoError(){
  alert("Cannot find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError );