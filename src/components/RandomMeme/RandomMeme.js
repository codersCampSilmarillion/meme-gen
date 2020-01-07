import React, {Component} from "react";
import {
    Button,
    ListItemText, GridListTile, Container, Box

} from "@material-ui/core";
import Image from 'material-ui-image'
import StyledComponents from "./styles";

class RandomMeme extends Component {
    constructor() {
        super();
        this.state = {
            randomImg: "",
            allMemeImg: [],
            alt: ""
        };
    }

    random() {
        let randomNumber = Math.floor(
            Math.random() * this.state.allMemeImg.length
        );
        this.setState({
            randomImg: this.state.allMemeImg[randomNumber].url,
            alt: this.state.allMemeImg[randomNumber].name
        });
    }

    handleClick = () => {
        this.random();
    };

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(data => data.json())
            .then(response => {
                const {memes} = response.data;
                this.setState({allMemeImg: memes});
                this.random();
            });
    }

    render() {
        return (
            <Container>
                <Box style={{marginTop: "10%"}} textAlign="center">
                    <h2>Make your own amazing meme!</h2>
                </Box>
                <Box>
                    <Box component={"div"} display={"inline"}>
                        <img display={"inline"} className="imgRand" src={this.state.randomImg}
                             alt={this.state.alt}
                             style={{width: '40%', height: 'auto', margin: '2em', padding: '0'}}/>
                    </Box>
                    <Box component={"div"} display={"inline"}>
                        <ListItemText display={"inline"}>
                            <p>1.Choose you template</p>
                            <p>2.Write your text</p>
                            <p>3.Voila!</p>
                        </ListItemText>
                    </Box>
                </Box>

            </Container>
        );
    }
}


export default RandomMeme;

