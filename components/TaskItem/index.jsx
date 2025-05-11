import {View, Text, Pressable, Image, StyleSheet} from "react-native"

const TaskItem = ({completed, text, onToggleComplete, onPressEdit, onPressDelete}) => {
    const cardStyles = [styles.card];
    if(completed){
        cardStyles.push(styles.cardCompleted)
    }

    return (
        <View style={cardStyles}>
            <Pressable onPress={onToggleComplete}>
                <Image source={completed ? require('../../assets/images/checked.png') : require('../../assets/images/not_checked.png') } />
            </Pressable>
            <Text style={styles.text}>{text}</Text>
            <Pressable onPress={onPressEdit}>
                <Image source={require('../../assets/images/edit.png')  } />
            </Pressable>
            <Pressable onPress={onPressDelete}>
                <Text style={styles.delete}>X</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        backgroundColor: '#98A0A8',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal: 8,
        paddingVertical:18,
        borderRadius:8,
        gap: 8
    },
    cardCompleted:{
        backgroundColor: '#0F725C'
    },
    text:{
        flex: 1,
        color:'#021113',
        fontSize: 18,
        fontWeight: 'bold'
    },
    delete:{
        fontSize:24,
        fontWeight: 'bold',
        borderWidth:1,
        borderRadius:18,
        paddingHorizontal:8
    }

})

export default TaskItem