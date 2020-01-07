import React, {Component} from "react";
import {
    Button,
    ListItemText , Grid, Container, Box, ListItemAvatar, Avatar, ListItem

} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import StyledComponents from "./styles";

class RandomMeme extends Component {
    constructor() {
        super();
        this.state = {
            randomImg: "",
            allMemeImg: [],
            alt: "",
            width: "",
            height: ""
        };
    }

    random() {
        let randomNumber = Math.floor(
            Math.random() * this.state.allMemeImg.length
        );
        this.setState({
            randomImg: this.state.allMemeImg[randomNumber].url,
            alt: this.state.allMemeImg[randomNumber].name,
            width: this.state.allMemeImg[randomNumber].width,
            height: this.state.allMemeImg[randomNumber].height
        });
    }

    imgSize(width, height) {
        if (height > 1500 || width > 1500) {
            return 0.2;
        }
        if (height > 1000 || width > 1000){
            return 0.4;
        }
        if (height > 560 && height < 1000 || width > 560 && width < 1000) {
            return 0.5
        } else {
            return 1
        }
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
        console.log(this.state)
        return (
            <Container>
                <Box style={{marginTop: "7%", marginBottom: "2%"}} textAlign="center">
                    <h1>Make your own amazing meme!</h1>
                    <p>Create your meme easy</p>
                </Box>
                <Grid container spacing={1} style={{backgroundColor: " rgb(245,245,240)"}}>
                    <Box component={"div"} display={"inline"} m={2}>
                        <img className="imgRand" src={this.state.randomImg}
                             alt={this.state.alt}
                             width={this.state.width * this.imgSize(this.state.width, this.state.height)}
                             height={this.state.height * this.imgSize(this.state.width, this.state.height)}
                        />
                    </Box>
                    <Box component={"div"} display={"inline"} m={4} p={3}>
                        <h2 align={"right"}>How to make a meme</h2>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <StarIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Choose you meme template"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <StarIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Write your unique text"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <StarIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Voila! You have just created a meme"/>
                        </ListItem>
                    </Box>
                </Grid>

            </Container>
        );
    }
}


export default RandomMeme;

