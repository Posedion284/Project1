import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Alert } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import logo3 from '../../Images/logo3.png'
import UX1 from '../../Images/UX1.jpg'
import { MaterialIcon } from '../Icon';
// import DateTimePicker from '@react-native-community/datetimepicker';
import { IconButton } from 'react-native-paper'
import APILoginData from "../../Services/ProfileService"

const Login = ({navigation}) => {
  const [Username, setUsername] = useState("")
  const [UserError, setUserError] = useState("")
  const [Password, setPassword] = useState("")
  const [PasswordError, setPasswordError] = useState("")

  const ValidLogin = () => {
    //Usernamevar 
    UsernameValid = false;
    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    if (Username.length == 0) {
      setUserError('*This field cannot be left empty')
    }
    else if (!strongRegex.test(Username)) {
      setUserError("*Invalid Email")
    }
    else {
      setUserError("")
      UsernameValid = true
    }
    //Password
    var PasswordValid = false;
    if (Password.length == 0) {
      setPasswordError('*This field cannot be left empty')
    }
    else if (Password.length < 8) {
      setPasswordError('*Invalid Password')
    }
    else {
      setPasswordError("")
      PasswordValid = true
    }
    if (UsernameValid && PasswordValid) {
      Alert.alert('Success', 'Login Successful', [
        { text: 'OK', onPress: (refresh) },
        navigation.navigate('ValidForm')
      ])
      handleLogin()
    }
  }

  //API calling
  const handleLogin = async () =>{
    let testobj = {
      Username,
      Password,
    }
    APILoginData.login(testobj).then((res) => {
      console.log("result ===> ","Welcome "+testobj.Username);
    })
  }

  const refresh = () => {
    setUsername("");
    setPassword("");
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.UXcon}><Image style={{ width: 600, height: 1200 }} source={UX1} /></View>
      {/* <View style={styles.oval1} /> */}
      {/* <View style={styles.circle1} /> */}
      <View style={styles.logo}><Image style={{ width: 100, height: 100 }} source={logo3} /></View>
      <View style={{ marginTop: -20 }}>
        <View style={styles.input}>
          <TextInput style={styles.textbox}
            placeholder='Email address'
            onChangeText={text => setUsername(text)}
            value={Username} />
        </View>
        {UserError.length > 0 && <Text style={styles.ErrText}>{UserError}</Text>}
        <View style={styles.input}>
          <TextInput style={styles.textbox}
            placeholder='Password'
            onChangeText={text => setPassword(text)}
            value={Password} />
          <View style={styles.eyepos}>
            <IconButton
              icon='eye-off-outline'
              onPress={() => console.log("Hide")}>
            </IconButton>
          </View>
        </View>
        {PasswordError.length > 0 && <Text style={styles.ErrText}>{PasswordError}</Text>}
      </View>
      <View style={styles.input}>
        <Button style={styles.button1}
          mode='contained'
          onPress={ValidLogin}>
          Log In
        </Button>
      </View>
      <View style={styles.input}><Divider style={styles.divider1} /></View>
      <View style={styles.belowdiv}>
        <Text style={{ color:'black', fontWeight:'bold' }}>Don't have an account?</Text>
        <View style={{ marginLeft: -10 }}><Button textColor='blue' mode='text'
          onPress={() => navigation.navigate('Signup')}
        >Create Account
        </Button>
        </View>
      </View>
      <View style={styles.belowdiv}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Forgotten your Login Details?</Text>
        <View style={{ marginLeft: -10 }}><Button textColor='red' mode='text'
          onPress={() => console.log('Reset Password')}
        >Get Help Logging in.
        </Button>
        </View>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  UXcon: {
    position: 'absolute',
    top: -170,
    left: -100,
  },
  logo: {
    marginTop: 192,
    marginBottom: 30,
  },
  input: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  textbox: {
    borderColor: '#D3D3D3',
    backgroundColor: '#D3D3D3',
    textShadowColor: 'grey',
    height: 45,
    width: 300,
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10
  },
  ErrText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 15
  },
  belowdiv: {
    marginTop: -10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  button1: {
    borderColor: 'black',
    backgroundColor: '#449EE4',
    width: 300,
    height: 45,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'black',
  },
  eyepos: {
    // flexDirection:'row'
    position: 'absolute',
    right: 10,
    top: 7,
  },
  divider1: {
    width: 350,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: 'black'
  },
});

export default Login;
