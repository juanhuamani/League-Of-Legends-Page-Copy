import axios from 'axios';

const apiUrl = 'https://ddragon.leagueoflegends.com/cdn/14.2.1/data/es_AR/';

export const fetchChampions = async () => {
  try {
    const response = await axios.get(apiUrl + 'champion.json');
    const championsData = response.data.data;
    return championsData;
  } catch (error) {
    console.error('Error al hacer la solicitud:', error.message);
    throw error; 
  }
};

