import React,{useState} from "react";
import {View,Text,SafeAreaView, StyleSheet,FlatList} from "react-native"
import Task from "./components/Tasks"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App(){
  
  const [List,setList]=useState([])
  const renderTask=({item})=>(<Task text={item}/>)
 
  
  
  return(
    <SafeAreaView style={styles.container}>
      
      <Header setCounter={List.length}/>
      
      <View >
        <FlatList
        data={List}
        renderItem={renderTask}
        />
        </View>
        
     <Footer List={List} setList={setList}></Footer>
    
      </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  container:{flex:1,backgroundColor:"#102027"},
  })



export default App;
