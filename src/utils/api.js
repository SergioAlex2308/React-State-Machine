let options = {
  method: 'GET',
  headers: { 'x-api-key': import.meta.env.VITE_API_KEY }
}

const url = 'https://api.api-ninjas.com/v1/exercises'

export const fetchApi = () => {
  fetch(url, options).then(response => response.json())
  /* .then(data => console.log(data))
    .catch(err => {
      console.log(`error ${err}`)
    }) */
}
