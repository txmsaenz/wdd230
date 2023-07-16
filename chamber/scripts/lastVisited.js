
const options = {year: 'numeric'}

document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

document.getElementById('lastModified').textContent = document.lastModified;

const visitsDisplay = document.querySelector(".visits");
const todaysDate = Date.now();

currentdate.textContent = new Date().toLocaleDateString('en-US', options);

const lastVisit = new Date(window.localStorage.getItem('lastVisit-ls'));
const today = new Date();

if (!lastVisit) {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
} else {
  const lastVisited = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));
    if (lastVisited === 0){
  visitsDisplay.textContent = `Back so soon!  Awesome!`;
}  else {
    visitsDisplay.textContent = `You last visited ${lastVisited} days ago.`;
  }
}
localStorage.setItem("lastVisit-ls", today);