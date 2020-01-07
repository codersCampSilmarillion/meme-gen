import React, { Component } from "react";
import useStyles from "./app.css";


class RandomMeme extends Component {
    constructor() {
        super();
        this.state = {
            randomImg: "",
            allMemeImg: [],
            alt: ""
        };
    }

    random(){
        let randomNumber = Math.floor(
            Math.random() * this.state.allMemeImg.length
        );
        this.setState({ randomImg: this.state.allMemeImg[randomNumber].url, alt: this.state.allMemeImg[randomNumber].name });
    }

    handleClick = () => {
        this.random();
    };

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(data => data.json())
            .then(response => {
                const { memes } = response.data;
                this.setState({ allMemeImg: memes });
                this.random();
            });
    }

    render() {
        return (
            <div>
                <div className="meme">
                    <h2>Make your own amazing meme!</h2>
                    <img src={this.state.randomImg} alt={this.state.alt} />
                    <div className={"meme-instruction"}>
                        <p>1.Choose you template</p>
                        <p>2.Choose you template</p>
                        <p>3.Choose you template</p>
                    </div>
                </div>
                <div className="meme-rand">
                    <button onClick={this.handleClick}>Try again</button>
                </div>
            </div>
        );
    }
}

export default RandomMeme;

