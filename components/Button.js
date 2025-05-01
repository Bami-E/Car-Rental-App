import { TouchableOpacity, Text, StyleSheet } from "react-native";


const Button = ({text})=>{
    return(
        <TouchableOpacity style={styles.button}> 
        <Text style={styles.text}> {text} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:'#212121',
        borderRadius:30,
        height: 60,
        paddingHorizontal:20,
        width: '80%',
        marginVertical: 30,
        justifyContent:'center',
        alignItems:'center'
    },

    text: {
        color: 'white',
        fontSize: 19,
        fontWeight: 600
    }

})
export default Button