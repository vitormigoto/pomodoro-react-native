import { View, Text, Image, StyleSheet } from "react-native";
import { router } from "expo-router";
import {FokusButton} from "../components/FokusButton";
import {Footer} from "../components/Footer";



export default function Index(){
  return (<View style={styles.container}>
    <Image source={require('../assets/images/logo.png')} />
    <View style={styles.inner}>
        <Text style={styles.title}>
          Otimize sua {'\n'}
           produtividade,{'\n'}
          <Text style={styles.bold}>
            mergulhe no que {'\n'}
             importa
          </Text>
        </Text>
        <Image source={require('../assets/images/home.png')} style={styles.homeImage}/>
        <FokusButton 
          title='Quero Iniciar!' 
          onPress={() => router.navigate('/pomodoro')}
        />
    </View>
    <Footer/>
  </View>);
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#021133',
        gap:40
  },
  inner:{
    gap:16
  },
  title:{
    color: '#FFF',
    textAlign: 'center',
    fontSize: 26
  },
  bold:{
    fontWeight:'bold'
  },
  homeImage:{
    width: 317,
    height: 266
  }


})