import React, {useState, useEffect} from 'react';
import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Listagem({ data }) {

    const [star, setStar] = useState(0);
    const [dados, setDados] = useState([]);


    function teste(){

     if(data.rank <=3){
            return(
                <FontAwesome name="star" size={10} color="#c49000"/> 
            )
        }else if(data.rank <=6){
            return(
                <><FontAwesome name="star" size={10} color="#c49000"/>
                <FontAwesome name="star" size={10} color="#c49000"/></>
            );
        }else if(data.rank <=9){
            return(
                <><FontAwesome name="star" size={10} color="#c49000"/>
                <FontAwesome name="star" size={10} color="#c49000"/>
                <FontAwesome name="star" size={10} color="#c49000"/>
                </>
            );
        }else if(data.rank <=12){
            return(
                <><FontAwesome name="star" size={10} color="#c49000"/>
                <FontAwesome name="star" size={10} color="#c49000"/>
                <FontAwesome name="star" size={10} color="#c49000"/>
                <FontAwesome name="star" size={10} color="#c49000"/>
                </>
            );
        }else if(data.rank <=15){
            return(
                <><FontAwesome name="star" size={10} color="#c49000"/>
                <FontAwesome name="star" size={10} color="#c49000"/>
                <FontAwesome name="star" size={10} color="#c49000"/>
                <FontAwesome name="star" size={10} color="#c49000"/>
                <FontAwesome name="star" size={10} color="#c49000"/>
                </>
            );
        }
    }



 return (
   <View style={styles.container}>
       <Image
        source={({uri: data.book_image})}
        style={styles.img}
       />
       <Text style={styles.txtAuthor}>{data.author}</Text>
       <Text style={styles.txtTitle}>{data.title}</Text>
       <View style={{flexDirection: 'row'}}>
         {teste()}
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    txtAuthor:{
        fontSize:12,
        width:150,
        fontWeight: 'bold'
    },
    txtTitle:{
        fontSize:12,
        width:150
    },
    img:{
        width:150, 
        height:200,
        marginHorizontal:4,
        marginLeft:1
    }
})