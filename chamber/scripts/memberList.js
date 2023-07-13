const baseURL = "https://txmsaenz.github.io/wdd230/";
const linksURL = "https://txmsaenz.github.io/wdd230/chamber/data/members.json";
const list = document.querySelector('#listItems');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.members);
  }
  
  getLinks();

  const displayLinks = (members) => {
    members.forEach((member) => {
        let listItem = document.createElement('li');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('p');
        let image = document.createElement('img');
        let level = document.createElement('p');

        name.innerText = member.name;
        address.innerText = member.address;
        phone.innerText = member.phone;
        url.innerText = member.url;
        level.innerText = member.level;

        image.setAttribute('src', member.image);
        image.setAttribute('alt', name);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '100');
        image.setAttribute('height', '100');

        listItem.appendChild(name);
        listItem.appendChild(address);
        listItem.appendChild(phone);
        listItem.appendChild(url);
        listItem.appendChild(image);
        listItem.appendChild(level);

        list.appendChild(listItem);
    });
  };

  const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

