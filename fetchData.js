const fetch = require("node-fetch");
const fs = require("fs");

const url = "https://pokeapi.co/api/v2/pokemon/";

const fetchPokemon = async (id) => {
  try {
    const res = await fetch(`${url}${id}`);
    const data = await res.json();
    console.log(data);
  } catch {}
};
fetchPokemon(2);
