import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';

const ValidForm = () => {
    const [Name, setName] = useState("")
    const [NameError, setNameError] = useState("")
    const [DOB, setDOB] = useState("")
    const [DOBError, setDOBError] = useState("")
    const [Address, setAddress] = useState("")
    const [AddressError, setAddressError] = useState("")
    const [Phone, setPhone] = useState("")
    const [PhError, setPhError] = useState("")
    const [Email, setEmail] = useState("")
    const [EmailError, setEmailError] = useState("")
    const HandleSubmit = () => {
        //Email 
        var emailValid = false;
        if (Email.length == 0) {
            setEmailError('*Email is required');
        }
        else if (!Email.includes('@')) {
            setEmailError('*Email must contain one domain');
        }
        else if (Email.indexOf(' ') >= 0) {
            setEmailError('*Email cannot contain spaces');
        }
        else {
            setEmailError("");
            emailValid = true
        }
        //Phone Number
        var PhoneValid = false;
        if (Phone.length == 0) {
            setPhError("*Phone Number cannot be empty")
        }
        else if (Phone.length != 10) {
            setPhError('*Phone Number must be 10 digits');
        }
        else {
            setPhError("")
            PhoneValid = true
        }

        //Address
        var AddressValid = false;
        if (Address.length == 0) {
            setAddressError('*Address cannot be empty');
        }
        else {
            setAddressError("");
            AddressValid = true
        }

        //Date of Birth
        var DOBValid = false;
        if (DOB.length == 0) {
            setDOBError('*DOB cannot be empty');
        }
        else {
            setDOBError('');
            DOBValid = true
        }

        //Name
        var NameValid = false;
        if (Name.length == 0) {
            setNameError('*Name cannot be empty');
        }
        else {
            setNameError('');
            NameValid = true
        }

        if (emailValid && NameValid && AddressValid && DOBValid && PhoneValid) {
            Alert.alert('Success', 'Submit Successful', [
                { text: 'OK', onPress: (refstate) },
            ])
        }
    }

    const refstate = () => {
        setEmail("");
        setName("");
        setDOB("");
        setAddress("");
        setPhone("");
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.oval1} />
            <View><Text style={styles.heading}>Welcome</Text></View>
            <View>
                <View style={styles.input}>
                    <Text style={styles.labelFont}>Name</Text>
                    <TextInput style={styles.textbox} placeholder='Enter your name'
                        onChangeText={text => setName(text)}
                        value = {Name}
                    />
                </View>
                {NameError.length > 0 &&
                    <Text>{NameError}</Text>
                }
                <View style={styles.input}>
                    <Text style={styles.labelFont}>Date of Birth</Text>
                    <TextInput style={styles.textbox}
                        placeholder='dd/mm/yyyy'
                        keyboardType='numeric'
                        onChangeText={text => setDOB(text)}
                        value = {DOB} />
                </View>
                {DOBError.length > 0 &&
                    <Text>{DOBError}</Text>
                }
                <View style={styles.input}>
                    <Text style={styles.labelFont}>Address</Text>
                    <TextInput
                        style={styles.textbox}
                        placeholder='Enter your address'
                        onChangeText={text => setAddress(text)}
                        value = {Address} />
                </View>
                {AddressError.length > 0 &&
                    <Text>{AddressError}</Text>
                }
                <View style={styles.input}>
                    <Text style={styles.labelFont}>Phone Number</Text>
                    <TextInput
                        style={styles.textbox}
                        keyboardType='numeric'
                        placeholder='Enter Phone Number'
                        onChangeText={text => setPhone(text)}
                        value = {Phone} />
                </View>
                {PhError.length > 0 &&
                    <Text>{PhError}</Text>
                }
                <View style={styles.input}>
                    <Text style={styles.labelFont}>Email</Text>
                    <TextInput
                        style={styles.textbox}
                        placeholder='Enter Email'
                        onChangeText={text => setEmail(text)}
                        value = {Email}
                    />
                </View>
                {EmailError.length > 0 &&
                    <Text>{EmailError}</Text>
                }
            </View>
            <View style={styles.buttonsView}>
                <View style={styles.buttons}>
                    <Button
                        buttonColor='#a2d5d4'
                        mode='contained'
                        onPress={HandleSubmit}>
                        Submit
                    </Button>
                </View>
                {/* <View style={styles.buttons}>
                    <Button
                        buttonColor='#a2d5d4'
                        mode='contained'
                        onPress={() => console.log('Reset')}>
                        Reset
                    </Button>
                </View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    oval1: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 250,
        height: 250,
        borderBottomEndRadius: 250,
        backgroundColor: '#FDB0C0',
    },
    heading: {
        fontSize: 30,
        marginBottom: 20,
        marginTop: 30,
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingBottom: 12
    },
    labelFont: {
        fontSize: 20,
        paddingEnd: 25,
    },
    textbox: {
        borderColor: 'black',
        height: 40,
        width: 200,
        borderWidth: 1,
        borderRadius: 2,
        padding: 10,
    },
    textbox1: {
        width: 20,
        borderColor: 'black',
    },
    buttonsView: {
        paddingTop: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttons: {
        width: 175,
        paddingEnd: 20
    }
});


export default ValidForm
