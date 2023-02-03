const chamadaApi = async (name) => {
	const response = await fetch(
		`https://rickandmortyapi.com/api/character/?name=${name}`,
	);
	const result = await response.json();
	console.log('chamou');

	return result;
};

export default chamadaApi;
