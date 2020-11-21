import React, { Component, useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, Button,} from 'react-native';


export default class Location extends Component {
  // State object
  // Where is an object that later on will get values from the navigator
  state = {
    location: null,
    latitude: null,
    longitude: null,
    country: null ,
    city: null,
    postcode: null,
    passiveMode: false,
  };

  getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // getting the specific parameters
        const location = JSON.stringify(position); //<<< used initially for dev purposes
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        const country = JSON.stringify(position.coords.country);
        const city = JSON.stringify(position.coords.city);
        

        // the object state get a value for each parameter bellow.
        this.setState({ location });
        this.setState({ latitude });
        this.setState({ longitude });
        this.setState({ country });
        this.setState({ city });
       
      },
      // call a error message if something goes wrong.
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  //function called when the button is pressed
  pressButton = () => {
    // check if the button is in passive mode is true
    // in other other, if it is true, the variable clockCall, which
    //contains a setInterval, is stopped ("cleaned").
    if (this.state.passiveMode) {
      this.setState({ passiveMode: false });
      clearTimeout(this.clockCall);
    }
    // If passive mode is false
    // the variable clockcall is called, and start running
    // setInterval, calling the function getCoordinates
    // every 1 second.
    else {
      this.setState({ passiveMode: true });
      this.clockCall = setInterval(() => {
        this.getCoordinates();
      }, 1000);
    }
  };

  render() {
    return (
      <View>
        
        <TouchableOpacity onPress={this.getCoordinates}>
          
          <Text style={styles.text}>Latitude: {this.state.latitude}</Text>
          <Text style={styles.text}>Longitude: {this.state.longitude}</Text>
          </TouchableOpacity>
        <View style={styles.button}>
          <Button
            onPress={this.pressButton}
            /* if the state object has the passiveMode set to true, so the button shows ON, otherwise, OFF. */
            title={'Passive Mode: ' + (this.state.passiveMode ? 'ON' : 'OFF')}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    paddingVertical: 8,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  heading: {
    paddingVertical: 8,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  head: {
    paddingVertical: 8,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    paddingVertical: 8,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 5,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 21,
  },
});