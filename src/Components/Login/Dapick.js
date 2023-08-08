import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
// import { MaterialIcon } from '../Icon';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconButton } from 'react-native-paper'
import { Button } from 'react-native-paper';


const Date1 = () => {
    //date
    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    //time
    const [timePicker, setTimePicker] = useState(false);
    const [time, setTime] = useState(new Date(Date.now()));

    //  showDatePicker
    function showDatePicker() {
        setDatePicker(true);
    };

    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
        console.log("date=====>", date);
    };

    // showTimePicker 
    function showTimePicker() {
        setTimePicker(true);
    };

    function onTimeSelected(event, value) {
        setTime(value);
        setTimePicker(false);
        console.log("time=====>", time);
    }
    return (
        <View style={styles.container1}>
            <View style={styles.head}>
                <Text style={styles.lable}>Date<Text style={{ color: 'red' }}> *</Text>
                </Text>
                {datePicker && (
                    <DateTimePicker
                        value={date}
                        mode={'date'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={true}
                        onChange={onDateSelected}
                    />
                )}
                {!datePicker && (
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            selectionColor={'#9A208C'}
                            // onChangeText={text => setDate(text)}
                            value={date.toLocaleDateString('en-GB')}
                        />
                        <Button style={styles.icon}
                            onPress={showDatePicker}
                            name='calendar'
                            size={22}
                            textColor={'#9A208C'}/>
                    </View>
                )}
            </View>
            <View style={styles.head}>
                <Text style={styles.lable}>Time<Text style={{ color: 'red' }}> *</Text></Text>
                {timePicker && (
                    <DateTimePicker
                        value={time}
                        mode={'time'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={false}
                        onChange={onTimeSelected}
                    />
                )}
                {!timePicker && (
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder=''
                            selectionColor={'#9A208C'}
                            // onChangeText={text => setTime(text)}
                            value={time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                        />
                        <IconButton style={styles.icon}
                            onPress={showTimePicker}
                            name='clock'
                            size={22}
                            color={'#9A208C'} />
                    </View>
                )}
            </View>
        </View>

    )
}
export default Date1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        padding: 12
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingBottom: 12,
    },
    lable: {
        // fontWeight: 700,
        fontSize: 18,
    },
    input: {
        padding: 5,
        height: 40,
        borderWidth: 1,
        width: 200,
        fontSize: 18,
        borderRadius: 28,
        textAlign: 'center',
        borderColor: '#d0c9c3'
    },
    inputContainer: {
        justifyContent:'center',
        marginTop:100,
        padding:10,
    },
    icon:{
        position:'absolute',
        right:10
    }
});
