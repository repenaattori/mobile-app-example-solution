import { useContext } from "react";
import { FlatList, View } from "react-native";
import { Avatar, Card, IconButton, Text } from "react-native-paper";
import { Style } from "../styles/Style";
import { MessageContext } from "./MessageContext";

export default function MessageList(){

    const {messages, setMessages} = useContext(MessageContext);


    return(
        <View style={Style.container}>
            <FlatList
                data={messages}
                renderItem={({item}) => <Item item={item}/>}
            />
        </View>
    );
}

function Item({item}){
    return(
        <Card mode="outlined" style={Style.card}>
            <Card.Title 
                title={item.name + "  (" + item.stime+")"}
                left={ () => <Avatar.Icon size={30} icon={item.role}/> }
            />
            <Card.Content>
                <Text>{item.msg}</Text>
            </Card.Content>
        </Card>
    )
}