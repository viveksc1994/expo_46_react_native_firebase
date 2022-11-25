import { StyleSheet, View, Text, Button } from 'react-native';
import { useEffect } from 'react';
import { logEvent } from './Firebase';

export default function App() {

useEffect(()=>{
 
  const initConfig = async () => {
    console.log('ready!');
  }
 
  initConfig();

},[])

  const onPress = async () => {
    console.log('button is pressed!');
   
    try {
      await logEvent('custom_event', {
        id: '123123',
        value: 'value',
        variable: 'Button is pressed!!!',
      });
    } catch(err){
      alert(`error : ${err}`);
    }

  };
  return (
    <View style={styles.container}>
     <Text>Hi welcome to home page</Text>
     <Button onPress={onPress} title={'Please click Here'}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    alignItems:'center'
  },
});