import React from "react";
import axios from "axios";
import {Button, Typography} from "@material-ui/core"
import "../styles/SensorChecker.css"

class SensorChecker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temperature: "unknown",
            humidity: "unknown",
            led: "unknown"
        }

        this.updateHumid();
        this.updateTemp();
        this.ledStatus();
    }

    updateTemp(){
        axios.get("http://localhost:4000/gettemp")
                .then(response => {
                    this.setState({
                        temperature: response.data.temperature
                    });
                })
                .catch(err => {
                    console.log(err);
                })
    }

    updateHumid(){
        axios.get("http://localhost:4000/gethumid")
                .then(response => {
                    this.setState({
                        humidity: response.data.humidity
                    });
                })
                .catch(err => {
                    console.log(err);
                })
    }
    
    ledStatus(){
        axios.get("http://localhost:4000/readled")
                .then(response => {
                    this.setState({
                        led: response.data.ledState
                    });
                })
                .catch(err => {
                    console.log(err);
                })
    }

    switchLed(){
        if(this.state.led === "On"){
            axios.get("http://localhost:4000/setledoff")
                .then(response => {
                    this.setState({
                        led: response.data.ledState
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        }else{
            axios.get("http://localhost:4000/setledon")
                .then(response => {
                    this.setState({
                        led: response.data.ledState
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    render(){
        const {temperature, humidity, led} = this.state;

        return(
            <div className="SensorChecker">
                <div className="SensorChecker__parameter">
                    <Typography variant="h6">Temperature: {temperature}</Typography>
                    <Button  
                        color="primary" 
                        variant="contained" 
                        onClick = {this.updateTemp.bind(this)}>
                        Update
                    </Button>
                </div>

                <div className="SensorChecker__parameter">
                    <Typography variant="h6">Humidity: {humidity} 
                    </Typography>
                    <Button 
                        color="primary" 
                        variant="contained" 
                        onClick = {this.updateHumid.bind(this)}>
                        Update
                    </Button>
                </div>

                <div className="SensorChecker__parameter">
                    <Typography variant="h6">Led: {led} 
                    </Typography>
                    <Button
                        color="primary" 
                        variant="contained" 
                        onClick = {this.switchLed.bind(this)}>
                        Switch
                    </Button>
                </div>
                
            </div>
        )
    }
    
}

export default SensorChecker;