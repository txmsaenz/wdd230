const options = {year: 'numeric'}

document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

document.getElementById('lastModified').textContent = document.lastModified;
