const findById = async (id) => {
	const response = await fetch(
		`https://rickandmortyapi.com/api/character/${id}`,
	);
	const result = await response.json();
	return result;
};

export default findById;
