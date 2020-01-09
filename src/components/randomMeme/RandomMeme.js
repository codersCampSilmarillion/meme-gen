import React, {Component} from "react";
import {
    ListItemText, Grid, Container, ListItemAvatar, Avatar, ListItem, Typography

} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import ScaleImgToAverageSize from "./scaleImgToAverageSize";
import {MyButton, MyBox, MyHeader} from "./styles";
import { Link } from "react-router-dom";
import UploadMemeForm from "../UploadMemeForm";

class RandomMeme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomImg: "",
            allMemeImg: [],
            alt: "",
            width: "",
            height: "",
            errorMesssage: ""
        };
    }

    random() {
        let randomNumber = Math.floor(
            Math.random() * this.state.allMemeImg.length
        );
        const {url, name, width, height} = this.state.allMemeImg[randomNumber];
        this.setState({
            randomImg: url, alt: name, width: width, height: height
        });
    }

    async componentDidMount() {
        await fetch("https://api.imgflip.com/get_memes")
            .then(data => data.json())
            .then(response => {
                const {memes} = response.data;
                this.setState({allMemeImg: memes});
                this.random();
            })
            .catch(err => {
                this.setState({errorMessage: err.message});
            });
    }


    render() {
        if (this.state.errorMessage) {
            return (<div><MyHeader>Server is not available.<p>Try again later</p><img
                src={"http://www.samsungsfour.com/images/exclamation.png"}/></MyHeader></div>)
        }
        return (
            <Container>
                <MyHeader>
                    <Typography variant="h5">
                        <h1>Make your own amazing meme!</h1>
                        <p>Create your meme easy</p>
                    </Typography>
                </MyHeader>
                <Typography>
                    <Grid container spacing={1} style={{backgroundColor: " rgb(245,245,240)"}}>
                        <MyBox>
                            <img src={this.state.randomImg}
                                 alt={this.state.alt}
                                 width={this.state.width * ScaleImgToAverageSize(this.state.width, this.state.height)}
                                 height={this.state.height * ScaleImgToAverageSize(this.state.width, this.state.height)}
                            />
                        </MyBox>
                        <MyBox>
                            <h2>How to make a meme</h2>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <StarIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Choose you meme template"/>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <StarIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Write your unique text"/>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <StarIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Voila! You have just created a meme"/>
                            </ListItem>
                            <Link to={"/UploadMeme"}>
                                <MyButton>Start make a meme</MyButton>
                            </Link>
                        </MyBox>
                    </Grid>
                </Typography>
            </Container>
        )
    }
}

export default RandomMeme;

