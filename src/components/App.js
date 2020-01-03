import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MemesList from './MemesList';


class App extends React.Component {
    state = { memes: [] }

    onSearchSubmit = async term => {
        const response = await axios.get('https://api.imgflip.com/get_memes', {});
        this.setState({ memes: response.data.data.memes })

    }


    render() {
        return ( <
            div >
            <
            SearchBar onSubmit = { this.onSearchSubmit }
            / > <
            MemesList memes = { this.state.memes }
            /> <
            /div>
        );
    }
};

export default App;