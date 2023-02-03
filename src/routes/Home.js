import React from 'react';
import chamadaApi from '../helpers/api';

export default class Home extends React.Component {
	state = {
		name: '',
		search: '',
		filter: '',
		valores: [],
	};

	componentDidMount() {
		const get = JSON.parse(localStorage.getItem('username'));
		this.setState({
			name: get,
		});
	}

	callApi = async () => {
		const { search } = this.state;
		const { results } = await chamadaApi(search);

		this.setState({
			valores: results,
		});
	};

	handleChange = ({ target: { value, name } }) => {
		this.setState({
			[name]: value,
		});
	};
	handleClick = () => {
		this.callApi();
	};

	render() {
		const { name, valores, search, filter } = this.state;
		console.log(name);
		const { history } = this.props;

		return (
			<>
				<h1>Home</h1>
				<h1>Bem vindo {name}</h1>

				<input
					placeholder="Nome do personagem"
					type="text"
					name="search"
					value={search}
					onChange={this.handleChange}
				/>
				<button type="button" onClick={this.handleClick}>
					Enviar
				</button>

				<div>
					{/* input do filtro */}
					<input
						placeholder="Filtro por nome"
						type="text"
						name="filter"
						onChange={this.handleChange}
						value={filter}
					/>
				</div>
				<span>
					{valores &&
						valores
							.filter((el) => el.name.includes(filter))	// filtro para puxar por nomes						
							.map((val) => (
								<div key={val.id}>
									<span>{val.name}</span>
									<button
										type="button"
										onClick={() => history.push(`profile/${val.id}`)}
									>
										perfil
									</button>
								</div>
							))}
				</span>
			</>
		);
	}
}
