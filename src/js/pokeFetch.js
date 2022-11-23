'use strict';

const pokeSearch = async (pokemon) => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
	try {
		const data = await response.json();
		return data;
	} catch (error) {
		return undefined
	}
};

export default pokeSearch
