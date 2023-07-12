const baseURL = "https://txmsaenz.github.io/wdd230/";

const linksURL = "https://txmsaenz.github.io/wdd230/chamber/data/members.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data);
  }
  
  getLinks();

  const displayLinks = (data) => {
    const list = document.getElementById('listItems');

    data.forEach((member) => {
        let listItem = document.createElement('li');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');
        let image = document.createElement('img');
        let level = document.createElement('p');

        name.innerText = member.name;
        address.innerText = member.address;
        phone.innerText = member.phone;
        url.href = baseURL + member.url;
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