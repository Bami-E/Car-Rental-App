import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Input from '../../components/Input';


export default function HomeScreen() {
  return (
    <SafeAreaView style={{backgroundColor:'#304FFE', flex:1}}>
      <ImageBackground style={{flex:1, alignItems:'center'}} source={require('../../assets/images/background.png')}>

        <Image resizeMode='contain' style={{height:146, alignSelf:'center', marginTop:70, width:122}} source={require('../../assets/images/logo.png')}/>

        <Text style={{fontSize:50, fontWeight:800, height:60, color:'#FFFFFF', textAlign:'center', marginTop:10, marginBottom:60}}> driveit</Text>
        
          <Input/>
        

        <View>

        <TouchableOpacity>
          <Text style={{color:'white', marginTop:20 }}>Forgot Password</Text>
        </TouchableOpacity>

        </View>

        <Button text = {'LOG IN'}/>

      
      </ImageBackground>
    </SafeAreaView>
  );
}


// const styles = StyleSheet.create({
//   input:{
//     height:60, 
//     width:'80%',
//     backgroundColor:'white',
//     borderRadius:30,
//     paddingHorizontal: 20,
//     fontSize:14,
//     fontWeight:400,
//     textAlign:'center'
    
//   }

//})

