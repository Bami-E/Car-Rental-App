import { StyleSheet, View, Text, Image, ScrollView,TextInput, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/Input';

export default function TabTwoScreen() {
  return ( 
    <SafeAreaView style={{flex:1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.view}>
          <TextInput style={styles.input} placeholder='Search for a car'
            placeholderTextColor='#212121'/>
        
        </View>

        <View style={{flexDirection:'row', paddingLeft:20, marginTop:20, marginBottom:-20}}>

          <TouchableOpacity style={{flex:1}} >  
            <Image resizeMode='cover' style={{marginLeft:-20, width:180, height:161}} source={require('../../assets/images/car1.png')}/>
          </TouchableOpacity> 

          <TouchableOpacity style={{flex:1}}>
            <Image resizeMode='cover' style={{marginLeft:-15, width:200, height:161}} source={require('../../assets/images/car2.png')}/>
          </TouchableOpacity> 

          <TouchableOpacity style={{flex:1}}>
            <Image resizeMode='cover' style={{marginLeft:10, width:112, height:161 }} source={require('../../assets/images/car3.png')}/>
        </TouchableOpacity> 
              
        </View>

    

        <Text style={{marginTop:40, marginHorizontal:30, fontSize:14, fontWeight:400}}>Available Vehicles</Text>

        <View style={{flexDirection:'column', justifyContent:'center', marginTop:10}}>

        <Image resizeMode='cover' style={{height:368, width:354, marginBottom:-50}} source={require('../../assets/images/car4.png')}/>
        <Image resizeMode='cover' style={{height:150, width:354, marginBottom:-30}} source={require('../../assets/images/car5.png')}/>
        <Image style={{height:60, width:'100%'}} source={require('../../assets/images/navbar.png')}/>

        </View>
        </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  input:{
    height:60, 
    width:'90%',
    backgroundColor:'white',
    borderRadius:30,
    paddingHorizontal: 20,
    fontSize:14,
    fontWeight:400,
    paddingLeft:30,
    marginTop:20
  },

  view: {
    alignItems:'center',
    width:'100%',
    marginTop: 20
}

  
})
