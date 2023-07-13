
const currentTemp = document.querySelector('#current-temp');
const futureTemp = document.querySelector('#future-temp');
const futureTemp2 = document.querySelector('#future-temp2');
const futureTemp3 = document.querySelector('#future-temp3');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=13.35&lon=144.75&units=imperial&appid=3584295f4cfaeb1023ce96c5dec36861";

const url2 = "https://api.openweathermap.org/data/2.5/forecast?lat=13.35&lon=144.75&units=imperial&appid=3584295f4cfaeb1023ce96c5dec36861"

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data); 
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F - ` + data.weather[0].description;
  captionDesc.textContent = `${desc}`;
}

async function apiFetch2() {
  try {
    const response = await fetch(url2);
    if (response.ok) {
      const data2 = await response.json();
      displayResults2(data2); 
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch2();

function displayResults2(data2) {
  futureTemp.innerHTML = `${data2.list[0].main.temp}&deg;F - ` + data2.list[0].weather[0].description;
}

async function apiFetch3() {
  try {
    const response = await fetch(url2);
    if (response.ok) {
      const data3 = await response.json();
      displayResults3(data3); 
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch3();

function displayResults3(data3) {
  futureTemp2.innerHTML = `${data3.list[1].main.temp}&deg;F - ` + data3.list[1].weather[0].description;
}

async function apiFetch4() {
  try {
    const response = await fetch(url2);
    if (response.ok) {
      const data4 = await response.json();
      displayResults4(data4); 
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch4();

function displayResults4(data4) {
  futureTemp3.innerHTML = `${data4.list[2].main.temp}&deg;F - ` + data4.list[2].weather[0].description;
}