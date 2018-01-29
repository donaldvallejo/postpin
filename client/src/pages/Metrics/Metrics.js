import React, { Component } from 'react';
import axios from 'axios';

import './Metrics.css';
import ImgList from '../../components/ImgList';
import SearchForm from '../../components/SearchForm';
// import cred from './cred.js';

export default class Metrics extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [],
			loadingState: true
		};
	}

	componentDidMount() {
		this.performSearch();
	}

	performSearch = (query = 'trending') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=15&query=${query}&client_id=fa0b26bd4c0834d6a66f39587142bd9bac839fc21d640ed07a509347b37dbd5c`
			)
			.then(data => {
				this.setState({ imgs: data.data.results, loadingState: false });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};


	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">ImageSearch</h1>
						<SearchForm onSearch={this.performSearch} />
					</div>
				</div>
				<div className="main-content">
					{this.state.loadingState
						? <p>Loading</p>
						: <ImgList data={this.state.imgs} />}
				</div>
			</div>
		);
	}
}
