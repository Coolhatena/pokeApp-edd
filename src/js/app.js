'use strict';
import pokeSearch from './pokeFetch.js';
import createPokemonCard from './createPokemonCard.js';
import pokemonsList from '../data/pokelist.js'

const pokeText = document.getElementById('pokeText')
const form = document.getElementById('form')
const pokemonContainer = document.getElementById('pokemon-container')
const pokemonsCheck = document.getElementById("preservePokemon")
const pokemonSugestions = document.getElementById("pokemonSugestions")

const onChange = () => {
	const data = pokeText.value.toLowerCase();
	const sugestionsList = pokemonsList.filter(pokemon => pokemon.toLowerCase().includes(data))
	console.log(sugestionsList)
	pokemonSugestions.innerHTML = ""
	
	sugestionsList.forEach( pokemon =>{
		const option = document.createElement('option');
		option.textContent = pokemon;
		option.value = pokemon;
		pokemonSugestions.append(option)
	})
}

const getData = async () => {
	try{
		const searchData = pokeText.value;
		const data = await pokeSearch(searchData);
		return data
	} catch {
		return undefined
	}
}

const onSubmit = async (event) =>{
	event.preventDefault()
	const data = await getData();
	if(data){
		!pokemonsCheck.checked ?  pokemonContainer.innerHTML = "" : null;
		const pokemonCard = createPokemonCard(data);
		pokemonContainer.appendChild(pokemonCard);
	} else {
		alert('Pokemon no encontrado')
	}
	pokeText.value = ''
	pokemonSugestions.innerHTML = ''
}

pokeText.addEventListener('input', onChange);
form.addEventListener('submit', onSubmit);
