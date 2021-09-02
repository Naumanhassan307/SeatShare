import HomeStyle from './HomeStyle';
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import profile from "../../../assets/profile.jpg"

import Icon from 'react-native-vector-icons/EvilIcons';

const Home = () => {
  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.top}>
        <View style={HomeStyle.top1}>
          <View style={HomeStyle.top1div}>
            <Image source={profile} style={HomeStyle.top1divimg} />
          </View>
        </View>
        <View style={HomeStyle.top2}>
          <Text style={HomeStyle.top2txtname}>Ali Hassan</Text>
          <View style={HomeStyle.top2txt}>
            <Icon name="location" size={30} color="#57419D" />
            <Text style={HomeStyle.top2txt1}>Faisalabad</Text>
          </View>
        </View>
        <View style={HomeStyle.top3}>
          
            <Text >Buyer</Text>
         
        </View>
      </View>
      <View style={HomeStyle.mdl}></View>
      <View style={HomeStyle.btm}></View>
    </View>
  );
};

export default Home;
