import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

export default class App extends Component {

    state = { images: [] };

    /** 
     * This method uses async/await to get data from unsplash site
     * The method is being pst to the SearchBar component
     * 
    */
    onSearchSubmit = async (term) => {

        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });
        this.setState({ images: response.data.results });

    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}
