
import React from "react";
import {View,Text,SafeAreaView,TextInput,TouchableOpacity} from "react-native"
import styles from "./Footer.style"
const Footer =(props)=>{
    return(
        <View style={styles.footer}>
            <TextInput style ={styles.input}placeholder="Yapılacaklar">{props.text}</TextInput>
            <TouchableOpacity style={styles.save}>
                <Text style={styles.saveText}>kaydet</Text>
            </TouchableOpacity>
        </View>
        
    )
}
export default Footer