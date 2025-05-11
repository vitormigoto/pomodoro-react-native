import { useLocalSearchParams } from "expo-router";
import { View,Text } from "react-native";

export default function EditTask() {

    const {id} = useLocalSearchParams()
    return (
        <View>
            <Text>Precisamos editar essa tarefa com id : {id}</Text>
        </View>)
}
