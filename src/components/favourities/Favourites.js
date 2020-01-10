import React, {Component} from "react";
import {Container, Typography} from "@material-ui/core";
import {MyButton, MyBox, MyHeader} from "../randomMeme/styles";
import {Link} from "react-router-dom";

class Favourites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomImg: [],
            allMemeImg: [],
            alt: "",
            localStorage: [],
            errorMesssage: ""
        };
    }

    async componentDidMount() {
        await fetch("https://api.imgflip.com/get_memes")
            .then(data => data.json())
            .then(response => {
                const {memes} = response.data;
                this.setState({allMemeImg: memes, localStorage: this.allStorage()});
                let v = this.allStorage();
                let mostCommonInLocalStorage = v.sort((a, b) =>
                    v.filter(v => v === a).length
                    - v.filter(v => v === b).length
                ).pop();
                let imgData = this.find(mostCommonInLocalStorage);
                this.setState({randomImg: imgData.url, alt: imgData.name})
            })
            .catch(err => {
                this.setState({errorMessage: err.message});
            });
    }

    allStorage() {
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            values.push(localStorage.getItem(keys[i]));
        }
        return values
    }

    find(imgId) {
        var found = this.state.allMemeImg.filter(item => item.id.includes(imgId));
        return found.find(item => item.url)
    }

    render() {
        if (localStorage.length == 0) {
            return (
                <MyHeader>
                    <Typography variant={"h3"}>You do not have favourite meme yet</Typography>
                    <Link to={"/UploadMeme"}>
                        <MyButton>Start make a meme</MyButton>
                    </Link>
                </MyHeader>)
        } else if (this.state.errorMessage) {
            return (<div>
                <h1>Server is not available.<p>Try again later</p><img
                    src={"http://www.samsungsfour.com/images/exclamation.png"} alt={"Error img"}/></h1>
            </div>)
        }
        return (
            <Container align={"center"}>
                <MyHeader>
                    <Typography variant={"h2"}>
                        Your favorite meme
                    </Typography>
                </MyHeader>
                <img src={this.state.randomImg} width={400} alt={this.state.alt}/>
            </Container>
        )
    }
}

export default Favourites;

