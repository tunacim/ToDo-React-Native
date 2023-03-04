import React from "react";
import {View,Text, StyleSheet} from "react-native"
import styles from "./Task.style"
const Task=(props)=>{
    return(
        <View style={styles.card}>
            <Text style={styles.text}> {props.text}</Text>
        </View>
    )

}
export default Task