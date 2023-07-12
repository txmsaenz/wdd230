const baseURL = "https://txmsaenz.github.io/wdd230/";

const linksURL = "https://txmsaenz.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data);
  }
  
  getLinks();

  const displayLinks = (data) => {
    const list = document.getElementById('linksList');

    data.forEach((week) => {
        let listItem = document.createElement('li');
        let title = document.createElement('p');
        let url = document.createElement('a');

        title.innerText = week.title;
        url.innerText = week.url;
        url.href = baseURL + week.url;

        listItem.appendChild(title);
        listItem.appendChild(url);

        list.appendChild(listItem);
    });
  }