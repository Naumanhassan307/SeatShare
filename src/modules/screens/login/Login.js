import LoginStyle from './LoginStyle';
import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const Login = () => {
  return (
    <View style={LoginStyle.container}>
      <View style={LoginStyle.loginMain}>
        <View style={LoginStyle.loginMain1}>
          <TextInput
            style={LoginStyle.t1inp}
            placeholder="First Name"
            placeholderTextColor="#00A4EF"
            keyboardType="text"
          />
          <TextInput
            style={LoginStyle.t1inp}
            placeholder="Second Name"
            placeholderTextColor="#00A4EF"
            keyboardType="text"
          />
        </View>
        <View style={LoginStyle.loginMain2}>
          <TextInput
            style={LoginStyle.t1inp1}
            placeholder="E-mail"
            placeholderTextColor="#00A4EF"
            keyboardType="email-address"
          />
        </View>
        <View style={LoginStyle.loginMain2}>
          <TextInput
            style={LoginStyle.t1inp1}
            placeholder="Password"
            placeholderTextColor="#00A4EF"
            
            secureTextEntry={true}
          />
        </View>
        <View style={LoginStyle.loginMain2}>
          <TextInput
            style={LoginStyle.t1inp1}
            placeholder="Confirm Password"
            placeholderTextColor="#00A4EF"
            
            secureTextEntry={true}
          />
        </View>
        <View style={LoginStyle.loginMain2}>
          <TouchableOpacity style={LoginStyle.loginbtn}>
            <Text>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
