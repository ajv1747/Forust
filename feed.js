import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, TextInput, TouchableOpacity, Image } from 'react-native';


function App ({navigation}) {
  const [list, setList] = React.useState(DATA);
  const [name, setName] = React.useState('');
  const [body, setContent] = React.useState('');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: 'white'
    },
    item: {
      backgroundColor: '#835740',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16
    },
    title: {
      fontSize: 20,
      alignContent: "flex-start",
      color: 'white'
    },
    content: {
      fontSize: 15,
      alignContent: "flex-start",
      color: 'white'
    },
    nameInput: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      flex:2
    },
  });

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      content: 'First Item Content',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      content: 'Second Item Content',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      content: 'Third Item Content',
    },
  ];


  const Item = ({ title, content}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} content = {item.content} />
  );

  function handleChange(event) {
    setName(event.target.value);
  }
 
  function handleAdd() {
    if(body.length != 0 && name.length != 0 ){
      const newList = list.concat({id:'1',title: name, content: body});
      setName('');
      setContent('');
      setList(newList);
   }
  }

  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />  
      
        <TextInput
          style={styles.nameInput}
          onChangeText={setName}
          value={name}
        />
        <View style={[styles.container, {
      flexDirection: "row"
    }]}>
      <TextInput
          style={styles.input}
          onChangeText={setContent}
          value={body}
        />
        <TouchableOpacity onPress={handleAdd}>
          <Image style={{height:50,width:50}} source={require('./leaf.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </View>
  );
}



export default App;