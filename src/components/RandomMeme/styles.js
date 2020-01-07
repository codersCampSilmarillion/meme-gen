import React from 'react';
import { styled } from '@material-ui/core/styles';
import ListItemText from "@material-ui/core/ListItemText";

const MyListItemText = styled(ListItemText)({
    padding: '0 30px',
    fontSize: '20px',
});

export default function StyledComponents() {
    return <MyListItemText>
       </MyListItemText>;
}
