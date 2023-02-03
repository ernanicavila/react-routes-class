import React from 'react';
import findById from '../helpers/byId';
import Loading from '../components/Loading';

export default class Profile extends React.Component {
	state = {
		characters: [],
		loading: false,
	};

	componentDidMount() {
		this.getCharacter();
	}

	getCharacter = async () => {
		this.setState({ loading: true });
		const {
			match: {
				params: { id },
			},
		} = this.props;
		const result = await findById(id);
		this.setState({
			characters: [result], // estou passando aqui o resultado da chamada da api em um array para poder mapear, caso contrário eu poderia consumir como um objeto comum.
			loading: false,
		});
	};
	render() {
		const { characters, loading } = this.state;
		console.log('characters', characters.length);
		const { history } = this.props;
		return (
			<>
				<button onClick={() => history.push('/home')}>Voltar</button>
				<h1>Profile</h1>
				{loading && <Loading />}

				{!loading &&
					characters.map((char) => (
						<div key={char.id}>
							<img src={char.image} alt={`foto de ${char.name}`} />
							<h1>Name: {char.name}</h1>
							<p>Location: {char.location.name}</p>
							<p>Specie: {char.species}</p>
							<p>Status: {char.status}</p>
						</div>
					))}
			</>
		);
	}
}
