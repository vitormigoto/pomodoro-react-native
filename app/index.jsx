import {useState,useRef} from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import {FokusButton} from "../components/FokusButton";
import {ActionButton} from "../components/ActionButton";
import {Timer} from "../components/Timer";
import {Footer} from "../components/Footer";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    image: require('./pomodoro.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5 * 60,
    image: require('./short.png'),
    display: 'Pausa curta'

  },
  {
    id: 'long',
    initialValue: 15 * 60,
    image: require('./long.png'),
    display: 'Pausa longa'
  }
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0])
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue)
  const [timerRunning, setTimerRunning] = useState(false)

  const timerRef = useRef(null)

  const clear = () =>{
    if(timerRef.current != null){
      clearInterval(timerRef.current)
      timerRef.current = null
      setTimerRunning(false)
    }
  }

  const toggleTimerType = (newTimerType) =>{
    setTimerType(newTimerType)
    setSeconds(newTimerType.initialValue)
    clear()
  }

  const toggleTimer = () =>{
    if(timerRef.current){
      clear()
      return
    }

    setTimerRunning(true)
    const id = setInterval(()=>{
      setSeconds(oldState => {
        if(oldState == 0 ){
          clear()
          return timerType.initialValue
        }
        return oldState - 1
      })
    }, 1000)
    timerRef.current = id
  }

  return (
    <View
      style={styles.container}
    > 
      <Image source={timerType.image}/> 
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton 
              key={p.id} 
              active={timerType.id == p.id} 
              onPress={() => toggleTimerType(p)} 
              display={p.display} />
          ))}
        </View>
        <Timer totalSeconds = {seconds}/>
        <FokusButton 
          title={timerRunning? 'Pausar': 'Começar'}
          onPress={toggleTimer}/>
      </View>
      <Footer/>         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#021133',
        gap:40
      },
  actions:{
    padding: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth:2,
    borderColor: '#144480',
    gap: 32
  },
  context:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center'
  }


})