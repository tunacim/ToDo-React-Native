import React,{useState} from "react";
import {View,Text,SafeAreaView, StyleSheet} from "react-native"
import Task from "./components/Tasks"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App(){
  return(
    <SafeAreaView style={styles.container}>
      <View>
      <Header counter="0"/>
      
      <View > 
        <Task  text="evi temizle"/>
        
        </View>
        <View>
          <Footer></Footer>
        </View>
      </View>
      </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  container:{flex:1,backgroundColor:"#102027"},
  })



export default App;
