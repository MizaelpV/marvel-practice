import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard';

class Home extends Component {
	state = {
		data: [],
		loading: true,
		error: null
	};

	fetchData = async () => {
		try {
			fetch(
				'https://gateway.marvel.com:443/v1/public/characters?apikey=60799e7b6e852fa73bb9af4a88d0214e&ts=1&hash=d1bde545edb4ee169dc4939f69844da5'
			)
				.then(res => res.json())
				.then(res => {
					this.setState({ data: res.data.results, loading: false });
				});
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		return (
			<div className='container'>
				{this.state.data.map(hero => {
					return <CharacterCard character={hero} />;
				})}
			</div>
		);
	}
}

export default Home;
