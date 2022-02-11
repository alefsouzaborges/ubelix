import React from 'react';
import reactDom from 'react-dom';
import { View, Text, StyleSheet } from 'react-native';

export default function Home({ data }) {
    console.log(data);
 return (
   <View style={styles.container}>
       <View style={[styles.squares, {backgroundColor: data.color}]}></View>
       <Text>{data.category}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF'
    },
    squares:{
        margin:5,
        width:80,
        height:80,
        borderRadius:4,
    }
})