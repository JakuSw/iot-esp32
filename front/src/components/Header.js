import React from 'react';
import {Typography, Button, ButtonGroup, Toolbar, AppBar} from "@material-ui/core"
import "../styles/Header.css"


function Header(){
    return(
        <header>
        <Toolbar className="Header">
          <Typography variant="h4" className="SystemName">Smart Home</Typography>
          <ButtonGroup>
            <Button color="primary" variant="contained" className="NavButton">Home</Button>
            <Button color="primary" variant="contained" className="NavButton">Sensors</Button>
            <Button color="primary" variant="contained" className="NavButton">Help</Button>      
          </ButtonGroup>
        </Toolbar>
        </header>
    )
}

export default Header;
