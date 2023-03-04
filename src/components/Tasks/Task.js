import React,{useState} from "react";
import {View,Text, StyleSheet, FlatList,TouchableOpacity} from "react-native"
import styles from "./Task.style"
const Task=(props)=>{
    const[remove,setRemove]=useState(true)
    function setBox(){
        setRemove(!remove)
    }
    return(
        
        
        <TouchableOpacity style={remove ? styles.card:styles.cardRemove} onPress={setBox} >
            <Text style={remove? styles.text:styles.textRemove}> {props.text}</Text>
        </TouchableOpacity>
        
    )

}
export default Task