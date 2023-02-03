import React from 'react';
import chamadaApi from '../helpers/api';

export default class Home extends React.Component {
	state = {
		name: '',
		search: '',
		valores: [],
	};

	callApi = async () => {
		const { name, valores } = this.state;

		const { results } = await chamadaApi(name);

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
		const { name, valores } = this.state;
		console.log(name);
		const { history } = this.props;
		return (
			<>
				<h1>Home</h1>
				<h1>Bem vindo {name}</h1>
				<input
					type="text"
					name="name"
					value={name}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleClick}>Enviar</button>
				<span>
					{valores.length &&
						valores.map((val) => (
							<div key={val.id}>
								<span>{val.name}</span>
								<button onClick={() => history.push(`profile/${val.id}`)}>
									perfil
								</button>
							</div>
						))}
				</span>
			</>
		);
	}
}
