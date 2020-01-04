import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MemesList from './MemesList';
import './css/app.css';
import Typography from '@material-ui/core/Typography'


class App extends React.Component {
    state = { memes: [] }

    onSearchSubmit = async term => {
        try{
            const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
                params: {
                    api_key: '9zdu5qM9hpvnV2VpvxbWEsBUt5bIxQJg',
                    q: term
                }
            });
            this.setState({ memes : response.data.data});
        } catch(e) {
            console.error(e)
        }
    }


    render() {
        return ( 
            <div className="main">
                <div className="header">
                    <Typography variant="h1">GIF SEARCHER</Typography>
                    <Typography variant="h4">Insert a phrase, press Enter and search for your favorite GIF!</Typography>
                    <SearchBar onSubmit = { this.onSearchSubmit }/>
                </div>
                <MemesList memes = { this.state.memes }/> 
            </div>
        );
    }
};

export default App;