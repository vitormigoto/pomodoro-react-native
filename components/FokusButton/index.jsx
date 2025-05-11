import {Pressable, Text, StyleSheet} from "react-native";

export const FokusButton = ({onPress, title, outline}) => {
    return (
        <Pressable 
          style={[styles.button, outline && styles.outlineButton] } 
          onPress={onPress}
          >
            <Text style={[styles.buttonText, outline && styles.outlineButtonText]}>
                {title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8
  },
  outlineButton:{
    backgroundColor: 'transparent',
    borderColor: '#B872FF',
    borderWidth: 2
  },
  buttonText:{
    textAlign:'center',
    color:'#021123',
    fontSize: 18
  },
  outlineButtonText:{
    color:'#B272FF'
  }



})