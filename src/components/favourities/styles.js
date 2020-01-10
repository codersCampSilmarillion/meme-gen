import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";

const MyButton = styled(Button)({
    background: 'linear-gradient(30deg, #bdc3c7 30%, #2c3e50 80%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '4%',
    margin: '4%',
});

const MyBox = styled(Box)({
    display:"inline",
    margin: 2,
    padding: 2,
    textAlign: "right"
});

const MyHeader = styled(Box)({
    marginTop: "8%",
    marginBottom: "2%",
    textAlign: "center"
});


export {MyBox, MyButton, MyHeader};


