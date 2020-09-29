import React from 'react';
import {AppBar, Toolbar, Typography, Button, ButtonGroup} from "@material-ui/core"
import "../styles/Header.css"
function Header(){
    return(
        <header className="Header">
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" >
                  Smart Home
                </Typography>
                <ButtonGroup variant="text" color="primary">
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Sensors</Button>
                    <Button color="inherit">Help</Button>
                </ButtonGroup>
              </Toolbar>
            </AppBar>
          </header>
    )
}

export default Header;
