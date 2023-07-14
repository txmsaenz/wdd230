const linksURL = "https://txmsaenz.github.io/wdd230/chamber/data/members.json";

async function getRandom() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.members);
  }
  
function displayLinks(members) {
    let randomIndex = Math.floor(Math.random() * members.length);
    let randomMember = members[randomIndex];

    let list = document.createElement('ul');
    let memberHTML = document.createElement('li');
    let name = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('p');
    let image = document.createElement('img');
    let level = document.createElement('p');

    name.innerText = randomMember.name;
    address.innerText = randomMember.address;
    phone.innerText = randomMember.phone;
    url.innerText = randomMember.url;
    level.innerText = randomMember.level;

    image.setAttribute('src', randomMember.image);
    image.setAttribute('alt', name);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '100');
    image.setAttribute('height', '100');

    memberHTML.appendChild(name);
    memberHTML.appendChild(address);
    memberHTML.appendChild(phone);
    memberHTML.appendChild(url);
    memberHTML.appendChild(image);
    memberHTML.appendChild(level);

    list.appendChild(memberHTML);
    
    document.getElementById("randomMember").appendChild(list);
}

getRandom();