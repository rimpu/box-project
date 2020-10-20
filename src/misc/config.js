const APP_BASE_URL = "http://api.tvmaze.com";

export async function getAllResults(queryString){
  const response = await fetch(`${APP_BASE_URL}${queryString}`).then(res => res.json());
  return response;
}