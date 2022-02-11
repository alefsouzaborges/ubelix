import React, {useState, useEffect} from 'react';
import { View, Text, Image, TextInput, FlatList,ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import api from '../../../src/Services/api';
import styles from './styles';
import Listagem from './listagem';
import Category from './category';

export default function Home() {

  const [dados1, setDados1] = useState([]);
  const [dados2, setDados2] = useState([]);

  let key = '\?api-key\=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR';

  async function loadbooks(){

    const response = await api.get('current/hardcover-fiction.json' + key);
    //console.log(response);
    if(response.status === 200){
      setDados1(response.data.results.books);
    }else{
      setDados1([]);
    }
  }

  async function loadCategory(){

    let obj = [
      {key:1, category: 'Biografia', color: '#f57f17'},
      {key:2, category: 'Tecnologia', color: '#2e7d32'},
      {key:3, category: 'Ficção', color: '#6200ea'},
      {key:4, category: 'Política', color: '#424242'},
      {key:5, category: 'Autoajuda', color: '#64c1ff'},
    ];

    setDados2(obj);
   
  }

useEffect(() => {

  loadbooks();
  loadCategory();

},[]);

 return (
   <ScrollView style={styles.container}>
     
    <View style={styles.navBar}>

      <View style={styles.contentTitleNavBar}>
        <Text style={styles.titleNavbar}>Bookshelf</Text>
      </View>

      <View style={styles.contentNavbarPhoto}>
        <Image
          source={require("../../../assets/images/avatar.png")}
          style={styles.img}
        />
      </View>

    </View>

    <View style={styles.contentSearch}>
        <TextInput
          placeholder='Qual livro você gostaria de ler hoje?'
          style={{
            borderWidth:0,
            flex:1,
          }}
          underlineColorAndroid ='transparent'
        />

        <FontAwesome name='search' size={25} color="#C1C1C1"/>

    </View>

    <Text style={styles.txtSugestion}>Para você</Text>


    <FlatList
      data={dados1}
      keyExtractor={( item ) => item.title}
      renderItem={({ item }) => (<Listagem data={ item }/>)}
      horizontal={true}
      style={styles.flatList}
    />

  <View>

  <Text style={styles.txtSugestion}>Categorias</Text>
    
  <FlatList
      data={dados2}
      keyExtractor={( item ) => item.key}
      renderItem={({ item }) => (<Category data={ item }/>)}
      horizontal={true}
      style={styles.flatList}
    />

  </View>
    

   </ScrollView>
  );
}



