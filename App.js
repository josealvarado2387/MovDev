import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Weather from './app/screens/weather';
import Converter from './app/screens/currency'

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome to your Geolocator</Text>
    <View style={styles.container_logo}>
    <View>
    <Image
    style={styles.logo}
    source={require("D:/Documentos/MobDev/Final_CA/2020092gps/assets/maps.png")}
    />
    <Text style={styles.subtitle}>You are currently here</Text>
    <View style={styles.body}>
    <Weather/>
    <Converter/>
    </View>
    </View>
    </View>
    </View>   
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ADD8E6',
      alignItems: 'center',
    },
    title: {
      paddingVertical: 8,
      color: '#20232a',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
    subtitle: {
      paddingVertical: 8,
      color: '#20232a',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
    },  
    logo: {
      marginTop: 25,
      borderColor:"black",
      borderWidth:3,
      alignItems: 'center',
      width: 500,
      height: 155,
    },
    body: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      
    },
    
  });