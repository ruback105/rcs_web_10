async function getRandomBeer() {
  const apiKey = "https://api.punkapi.com/v2/beers/random";
  const response = await fetch(apiKey);
  const data = await response.json();

  return data[0];
}

export default getRandomBeer;
