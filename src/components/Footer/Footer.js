
import React,{useState} from "react";
import {View,Text,SafeAreaView,TextInput,TouchableOpacity, Alert} from "react-native"
import styles from "./Footer.style"
const Footer =({List,setList})=>{
   
    const[text,setText]=useState("")
    const SaveText=()=>{
        setList([...List,text])
        setText("")
        
    }
    return(
        <View style={styles.footer}>
            <TextInput onChangeText={setText}  style ={styles.input} placeholder="Yapılacaklar"/>
            <TouchableOpacity  style={text.length >0 ?styles.saved:styles.save} onPress={SaveText} >
                <Text style={styles.saveText}>kaydet</Text>
            </TouchableOpacity>
        </View>
        
    )
}
export default Footer