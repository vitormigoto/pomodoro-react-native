import { Text,SafeAreaView, View, TextInput, Pressable, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import {Footer} from "../../components/Footer"
import useTaskContext from "../../components/context/useTaskContext";
import { useState } from "react";
import { router } from "expo-router";

export default function AddTasks(){

    const [description, setDescription] = useState()

    const {addTask} = useTaskContext()

    const submitTask = () => {
        if(!description){
            return
        }
        addTask(description)
        setDescription('')
        router.navigate('/tasks')
    }

    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
                <View style={styles.containerGroup}>
                    <Text style={styles.text}>
                        Adicionar uma tarefa:
                    </Text>
                    <View style={styles.inner}>
                        <Text style={styles.label}>
                            Em que você está trabalhando?
                        </Text>
                        <TextInput 
                            style={styles.input}
                            numberOfLines={10}
                            multiline={true}
                            value={description}
                            onChangeText={setDescription}
                        >

                        </TextInput>
                        <View style={styles.actions}>
                            <Pressable style={styles.button} onPress={submitTask}>
                                <Text>Salvar</Text>
                            </Pressable>
                        </View>
                    </View>
                    <Footer/>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#021123',
        alignItems:'center',
        gap: 16
    },
    containerGroup:{
        flex:1,
        backgroundColor:'#021123',
        alignItems:'center',
        justifyContent:'center',
        gap: 16
    },
    text:{
        color:'#FFF',
        textAlign:'center',
        fontSize: 26
    },
    inner:{
        backgroundColor:'#98A0A8',
        width:'90%',
        borderRadius: 8,
        padding:16,
        gap:32
    },
    label:{
        fontSize:18,
        fontWeight: 600
    },
    input:{
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 8,
        height:100
    },
    actions:{
        alignItems: 'flex-end',
    },
    button:{
        borderWidth:1,
        gap: 4,       
        padding:6,
        borderRadius:5 
    }



})