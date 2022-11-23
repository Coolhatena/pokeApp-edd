'use strict';
import capitalizeFirst from './capitalizeFirst.js';
import createTypes from './createTypes.js';

const createPokemonCard = (pokemon) => {
	const pokemonCard = document.createElement('div');
	const pokemonName = document.createElement('p');
	const pokemonId = document.createElement('span');
	const pokemonImg = document.createElement('img');
	const pokemonTypes = createTypes(pokemon.types)
	const pokemonHeight = document.createElement('p');
	const pokemonWeight = document.createElement('p');
	
	pokemonCard.className = 'pokemon-card'
	pokemonName.textContent = `${capitalizeFirst(pokemon.name).replace('-',' ')} `;
	pokemonName.className = 'name'
	pokemonId.textContent = `No. ${pokemon.id}`
	pokemonImg.src = pokemon.sprites.front_default;
	pokemonImg.alt = pokemon.name;
	pokemonImg.id = pokemon.name;
	pokemonImg.width = 120;
	pokemonImg.height = 120
	pokemonHeight.textContent = `Altura: ${pokemon.height / 10}m`
	pokemonWeight.textContent = `Peso: ${pokemon.weight / 10}kg`
	
	pokemonName.appendChild(pokemonId);
	pokemonCard.appendChild(pokemonName);
	pokemonCard.appendChild(pokemonImg);
	pokemonCard.appendChild(pokemonTypes);
	pokemonCard.appendChild(pokemonHeight);
	pokemonCard.appendChild(pokemonWeight);
	return pokemonCard;
}

export default createPokemonCard;
