
const options = {year: 'numeric'}

document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

document.getElementById('lastModified').textContent = document.lastModified;

const visitsDisplay = document.querySelector(".visits");
const todaysDate = Date.now();

currentdate.textContent = new Date().toLocaleDateString('en-US', options);

const lastVisited = document.getElementById('lastModified');
lastVisited.textContent = document.lastModified;

let lastVisit = Number(window.localStorage.getItem('lastVisits-ls'))  || 0;

if (lastVisit === 0) {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
} else if (lastVisit < 1) {
	visitsDisplay.textContent = `Back so soon!  Awesome!`;
}  else {
    visitsDisplay.textContent = 'You last visited  ${lastVisit} days ago.';
  }


lastVisit++;

localStorage.setItem("lastVisit-ls", lastVisit);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#073b4cff";
		main.style.color = "#000";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});