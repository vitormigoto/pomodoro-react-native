import { FlatList, StyleSheet, Text, View } from "react-native";
import {router} from "expo-router";
import TaskItem from "../../components/TaskItem";
import {FokusButton} from "../../components/FokusButton";
import useTaskContext from "../../components/context/useTaskContext";

export default function Tasks(){

    const {tasks, deleteTask, toggleTaskCompleted} = useTaskContext()

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                
                <View style={styles.inner}>
                    <FlatList
                        data={tasks}
                        renderItem={({item}) => <TaskItem 
                            completed={item.completed} 
                            text={item.description} 
                            onPressDelete={() => deleteTask(item.id)}
                            onToggleComplete={() => toggleTaskCompleted(item.id)}
                            onPressEdit={() => router.navigate(`/edit-task/${item.id}`)}/>}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => <View style={{height:8}}/>}
                        ListHeaderComponent={
                            <Text style={styles.text}>Lista de Tarefas:
                            </Text>
                        }
                        ListFooterComponent={
                            <View style={{marginTop:16}}>
                                <FokusButton 
                            title="+ Adicionar nova tarefa" 
                            outline
                            onPress={() => router.navigate('/add-task')}/>
                            </View>
                        }/>
                </View>
                
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#021133',
        alignItems:'center'
    },    
    wrapper:{
        width:'90%',
        gap:40
    },
    text:{
        textAlign:'center',
        color:'#FFF',
        fontSize: 26,
        marginBottom:16

    },
    inner:{
        gap: 8
    }

})