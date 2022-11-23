'use strict';
import capitalizeFirst from './capitalizeFirst.js';

const createTypes = (types) =>{
	console.log(types)
	const pokemonTypes = document.createElement('div');
	pokemonTypes.className = 'types'

	types.forEach((type) =>{
		const typeText = document.createElement('div');
		typeText.textContent = capitalizeFirst(type.type['name']);
		typeText.className = `type ${type.type['name']}`;
		pokemonTypes.appendChild(typeText);
	})

	return pokemonTypes;
};

export default createTypes;
