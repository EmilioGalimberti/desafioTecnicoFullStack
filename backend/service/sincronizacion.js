
import axios from "axios";
import cron from "node-cron";
import { People, Films, Planets, Species, Vehicles, Starships } from "../models/models.js";



// Programa un cron job para sincronizar datos
export const sincronizarDB =  cron.schedule('* * 23 * *', async () =>  {
  try {
      console.log("Sincronizando db con api")
      const peopleData = await getAllResources('https://swapi.dev/api/people/');
      const planetsData = await getAllResources('https://swapi.dev/api/planets/');
      const filmsData = await getAllResources('https://swapi.dev/api/films/');
      const speciesData = await getAllResources('https://swapi.dev/api/species/');
      const vehiclesData = await getAllResources("https://swapi.dev/api/vehicles/");
      const starshipsData = await getAllResources("https://swapi.dev/api/starships/");
      
      //Guarda los datos nuevos en la base de datos
      await createInDb(peopleData, People)
      await createInDb(planetsData, Planets)
      await createInDb(filmsData, Films)
      await createInDb(speciesData, Species)
      await createInDb(vehiclesData, Vehicles)
      await createInDb(starshipsData, Starships)
      
    } catch (error) {
      console.error('Error al sincronizar datos:', error);
    }
})


async function getAllResources(apiUrl) {
 
  let allResources = [];
  let currentPage = 1;
  let totalPages = 1;

  while (currentPage <= totalPages) {
    try {
      const response = await axios.get(apiUrl, {
        params: { page: currentPage },
      });

      allResources = allResources.concat(response.data.results);
      totalPages = Math.ceil(response.data.count / response.data.results.length);
      currentPage++;
    } catch (error) {
      //Le agregue para analizar que error puede estar obteniendo axios, porque me estaba haciendo bien la consulta y guardando los datos pero el
      //axiso igual me pasa al catch con un error
      console.error('Error fetching data:', error.message);
      console.error('Response data:', error.response?.data);
      console.error('Response status:', error.response?.status);
      console.error('Response headers:', error.response?.headers);
      console.error("Error with URL:", apiUrl);
    break;
    }
  }

  return allResources;
}

async function createInDb(data, Model){
  const dataIterable = data
  let countResources = 0;
  for (const dataVariable of dataIterable) {
    const existingResource = await Model.findOne({ url: dataVariable.url });
    if (!existingResource) {
      // Si no existe, guárdalo en la base de datos
      await Model.create(dataVariable);
      countResources++;
    }
  }
  console.log("sincronizacion de Modelo con exito " , Model , " modelos creados " ,countResources);
}




