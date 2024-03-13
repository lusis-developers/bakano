// fetch('https://codigoencasa.com/ghost/api/content/posts/?key=98e5e527610957edcc5aecf066')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

export const useApi = async () => {
  const response = await fetch('https://codigoencasa.com/ghost/api/content/posts/?key=98e5e527610957edcc5aecf066');
  const data = await response.json();
  
  return data;
}