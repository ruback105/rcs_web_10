const baseUrl = "https://api.themoviedb.org/3/discover/movie";
const defaultOptions = {
  include_adult: false,
  include_video: false,
  language: "en-US",
  page: 1,
  sort_by: "popularity.desc",
  api_key: "85f73104e3b573911ffb33c805875cb4",
};

async function getMovieList(customOptions) {
  const options = {
    ...defaultOptions,
    ...customOptions,
  };

  const newUrl = new URL(baseUrl);
  newUrl.search = new URLSearchParams(options).toString();

  const response = await fetch(newUrl.href);
  const data = await response.json();

  return data.results;
}

export default getMovieList;
