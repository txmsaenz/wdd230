const baseURL = "https://txmsaenz.github.io/wdd230/";

const linksURL = "https://txmsaenz.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
  }
  
  getLinks();