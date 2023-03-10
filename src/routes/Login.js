import React from 'react';

export default class Login extends React.Component {
	state = {
		name: '',
	};
  
	handleChange = ({ target: { value, name } }) => {
		this.setState({
			[name]: value,
		});
	};

	handleClick = () => {
		const { history } = this.props;
		history.push('/home');
		localStorage.setItem('username', JSON.stringify(this.state.name));
	};

	render() {
		const { name } = this.state;
		return (
			<>
				<h1>Banco de dados de personagens Rick and Morty</h1>
				<p>Informe seu nome</p>
				<input
					type="text"
					name="name"
					onChange={this.handleChange}
					value={name}
				/>

				<button
					onClick={this.handleClick}
					disabled={name.length < 3}
					type="button"
				>
					Entrar
				</button>
			</>
		);
	}
}
