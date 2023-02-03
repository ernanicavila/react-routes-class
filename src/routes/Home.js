import React from 'react';
import chamadaApi from '../helpers/api';

export default class Home extends React.Component {
	state = {
		name: '',
		search: '',
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
		const { name, valores, search } = this.state;
		console.log(name);
		const { history } = this.props;

		return (
			<>
				<h1>Home</h1>
				<h1>Bem vindo {name}</h1>
				
				<input
				placeholder='Nome do personagem'
					type="text"
					name="search"
					value={search}
					onChange={this.handleChange}
				/>
				<button type='button' onClick={this.handleClick}>Enviar</button>
				<span>
					{valores &&
						valores.map((val) => (
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
