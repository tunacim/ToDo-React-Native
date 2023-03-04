import React from "react";
import {View,Text,SafeAreaView, StyleSheet} from "react-native"
import styles from "./header.style"
const Header=(props)=>{
  
return(
  
  <View style={styles.header}> 
      <Text style ={styles.text}>Yapılacaklar</Text>
      <Text style={styles.text}>{props.setCounter}</Text>
  </View>
)
}
export default Header