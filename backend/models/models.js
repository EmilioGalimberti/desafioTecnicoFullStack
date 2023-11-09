
import mongoose from "../data/configdbMongoose.js"; 

const peopleSchema = new mongoose.Schema({
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: String,
  films: [String],
  species: [String],
  vehicles: [String],
  starships: [String],
  created: Date,
  edited: Date,
  url: String,
});

const planetsSchema = new mongoose.Schema({
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  population: String,
  residents: [String],
  films: [String],
  created: Date,
  edited: Date,
  url: String,
});

const filmSchema = new mongoose.Schema({
  title: String,
  episode_id: Number,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [String],
  planets: [String],
  starships: [String],
  vehicles: [String],
  species: [String],
  created: Date,
  edited: Date,
  url: String
});

const speciesSchema = new mongoose.Schema({
    name: String,
    classification: String,
  designation: String,
  average_height: String,
  skin_colors: String,
  hair_colors: String,
  eye_colors: String,
  average_lifespan: String,
  homeworld: String,
  language: String,
  people: [String],
  films: [String],
  created: Date,
  edited: Date,
  url: String,
});

const vehiclesSchema = new mongoose.Schema({
  name: String,
  model: String,
  manufacturer: String,
  cost_in_credits: String,
  length: String,
  max_atmosphering_speed: String,
  crew: String,
  passengers: String,
  cargo_capacity: String,
  consumables: String,
  vehicle_class: String,
  pilots: [String],
  films: [String],
  created: Date,
  edited: Date,
  url: String,
});

const starshipsSchema = new mongoose.Schema({
  name: String,
  model: String,
  manufacturer: String,
  cost_in_credits: String,
  length: String,
  max_atmosphering_speed: String,
  crew: String,
  passengers: String,
  cargo_capacity: String,
  consumables: String,
  hyperdrive_rating: String,
  MGLT: String,
  starship_class: String,
  pilots: [String],
  films: [String],
  created: Date,
  edited: Date,
  url: String,
});

export const People = mongoose.model('People', peopleSchema);
export const Planets = mongoose.model('Planets', planetsSchema);
export const Films = mongoose.model("Films", filmSchema);
export const Species = mongoose.model('Species', speciesSchema);
export const Vehicles = mongoose.model('Vehicles', vehiclesSchema);
export const Starships = mongoose.model('Starships', starshipsSchema);