import SplashStyle from "./SplashStyle"
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import logo from "../../../assets/logo.png"


const Splash = () => {
    return (
        <View style={SplashStyle.container}>
            <View style={SplashStyle.top}>
                <Image source={logo} style={SplashStyle.topimg}/>
            </View>
            <View style={SplashStyle.btm}>
                <Text style={SplashStyle.topimgtxt}>SeatShare</Text>
                <Text style={SplashStyle.topimgtxt1}>Let's Go Together</Text>
            </View>
        </View>
    );
};


export default Splash;
