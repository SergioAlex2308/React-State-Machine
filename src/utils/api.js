// let options = {
//   method: 'GET',
//   headers: { 'x-api-key': import.meta.env.VITE_API_KEY }
// }

// const url = 'https://api.api-ninjas.com/v1/exercises'
const url = 'https://wger.de/api/v2/muscle/?format=json'
// const url = 'https://restcountries.com/v3.1/region/ame'

// export const fetchApi = () => {
//   fetch(url, options).then(response => response.json())
//   /* .then(data => console.log(data))
//     .catch(err => {
//       console.log(`error ${err}`)
//     }) */
// }

export const fetchApi = () => fetch(url).then(response => response.json())
