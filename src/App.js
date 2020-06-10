import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import GifList from './components/GifList';

class App extends Component {
	state = {
		gifs: [],
	};

	componentDidMount() {}

	performSearch = (query) => {
		axios
			.get(
				`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`
			)
			.then((response) => {
				this.setState({
					gifs: response.data.data,
				});
			})
			.catch((error) => {
				console.log('Error fetching and parsing data', error);
			});
	};

	render() {
		return (
			<div>
				<div className='main-header'>
					<div className='inner'>
						<h1 className='main-title'>GifSearch</h1>
						<SearchForm onSearch={this.performSearch} />
					</div>
				</div>
				<div className='main-content'>
					<GifList data={this.state.gifs} />
				</div>
			</div>
		);
	}
}

export default App;
