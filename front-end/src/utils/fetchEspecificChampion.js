import { fetchChampions } from "./fetchChampions";
import axios from "axios";

const fetchData = async () => {
  try {
    const championsData = await fetchChampions();
    return championsData;
  } catch (error) {
    console.error('Error al obtener campeones:', error.message);
    throw error;
  }
};

const getChampionData = async (id) => {
  const champions = await fetchData();

  const championExists = Object.values(champions).find((champion) => champion.id === id);

  const apiUrl = 'https://ddragon.leagueoflegends.com/cdn/14.2.1/data/en_US/champion';

  if (championExists) {
    try {
      const response = await axios.get(`${apiUrl}/${championExists.id}.json`);
      const championsData = response.data.data;
      return championsData;
    } catch (error) {
      console.error('Error al hacer la solicitud:', error.message);
      throw error;
    }
  } else {
    return false;
  }
};

export default getChampionData;
