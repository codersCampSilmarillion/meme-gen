import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
    background: 'linear-gradient(30deg, #bdc3c7 30%, #2c3e50 80%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '4%',
    margin: '4%',

});

export default function StyledComponents() {
    return <MyButton>Start making meme</MyButton>;
}
