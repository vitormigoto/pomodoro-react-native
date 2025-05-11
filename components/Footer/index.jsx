import {View,Text,StyleSheet} from "react-native"

export const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Projeto feito para fins de aprendizado de React Native</Text>
            <Text style={styles.footerText}>Desenvolvido por Vitor Migoto</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
  footer:{
    width:'80%'
  },
  footerText:{
    textAlign:'center',
    color:'#98A0A8',
    fontSize:12.5
  }


})