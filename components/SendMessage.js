import { View } from "react-native";
import { Button, Checkbox, SegmentedButtons, Text, TextInput } from "react-native-paper";
import { StatusBar } from 'expo-status-bar';
import { Style } from "../styles/Style";
import { useContext, useState } from "react";
import { MessageContext } from "./MessageContext";

export default function SendMessages(){
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');
    const [role, setRole] = useState('shield-account');

    const roleButtons = [
        {value: 'shield-account', label: 'Teacher'},
        {value: 'account-group', label: 'Student'}
    ]

    const {messages, setMessages} = useContext(MessageContext);

    function addMessage(){
        const t = new Date();
        const stime = t.getDate() + '.' + (t.getMonth()+1) + 
            '.' + t.getFullYear() + ' ' + t.getHours() + ':' + t.getMinutes();

        const modifiedMessages = [...messages, {name, msg, role, stime} ];
        setMessages(modifiedMessages);
        setName('');
        setMsg('');
    }

    return(
        <View style={Style.container}>
            <Text style={Style.header} variant="headlineMedium">Add message</Text>
            <TextInput 
                mode="outlined" 
                style={Style.textInput} 
                label={'Name'}
                value={name}
                onChangeText={setName}
            />
            <TextInput 
                multiline
                mode="outlined" 
                style={Style.textInput} 
                label={'Message'}
                value={msg}
                onChangeText={setMsg}
            />
            <SegmentedButtons
                buttons={roleButtons}
                value={role}
                onValueChange={setRole}
                style={Style.segmentedButtons}
            />
            <Button mode="contained" onPress={addMessage} >Save message</Button>
        </View>
    );
}