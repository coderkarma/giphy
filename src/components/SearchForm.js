import React, { Component } from 'react';

class SearchForm extends Component {
	state = {
		searchText: '',
	};

	onSearchChange = (e) => this.setState({ searchText: e.target.value });

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSearch(this.state.searchText);
		e.currentTarget.reset();
	};

	render() {
		return (
			<form>
				<label htmlFor='search'>Search</label>
				<input
					type='search'
					onChange={this.onSearchChange}
					name='search'
					placeholder='Search...'
				/>
				<button type='submit' id='submit' className='search-button'>
					<i className='material-icons icn-search'>search</i>
				</button>
			</form>
		);
	}
}
export default SearchForm;
