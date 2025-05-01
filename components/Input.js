import {Text, StyleSheet, TextInput, View} from "react-native";


const Input = ()=>{
    return(
        <View style={styles.view}>
            <TextInput style={styles.input} placeholder='Schahr Soffer'
            placeholderTextColor='#212121'/>

            <TextInput style={styles.input} placeholder='****************'
             placeholderTextColor='#212121' />

        </View>
         
         
    )
}

const styles= StyleSheet.create({
    input:{
        height:60, 
        width:'80%',
        backgroundColor:'white',
        borderRadius:30,
        paddingHorizontal: 20,
        fontSize:14,
        fontWeight:400,
        textAlign:'center'
      },

    view: {
        alignItems:'center',
        width:'100%',
         gap:40 
    }
})

export default Input