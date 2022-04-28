import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'b7094e4754msh21b14e141a8a2e8p1e896fjsn57cb139c33cb',
    },
  });
    
  return data;
}