import React, { useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const objToQuery = obj => {
    const data = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return "?" + data.join("&");
  };

function UploadMemeForm () {

    const[topText, setTopText] = useState("");
    const[bottomText, setBottomText] = useState("");

    const memeData = {
        template_id: "61579", //na sztywno
        text0: topText,
        text1: bottomText,
        username: "silmarillion",
        password: "1silmarillion23"
    };

    console.log("top text: " + topText);
    console.log("bottom text: " + bottomText);

    return (
        <div>
            <form
                onSubmit={async e => {
                e.preventDefault();
                const response = await fetch(
                    `https://api.imgflip.com/caption_image${objToQuery(memeData)}`
                    );
                    const json = await response.json();
                    console.log(json);
                }}
            autoComplete="off"
            className="search"
            >

            <TextField
                label="Top text"
                variant="outlined"
                type="text"
                name = "topText"
                onChange={e => setTopText(e.target.value)}
            />
            <TextField
                label="Bottom text"
                variant="outlined"
                type="text"
                name = "bottomText"
                onChange={e => setBottomText(e.target.value)}
            />
            <Button variant="contained" type="submit" >Generate meme</Button>

            </form>
        </div>
        );
          
      
}
export default UploadMemeForm;
