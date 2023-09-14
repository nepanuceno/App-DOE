import { View } from "react-native"
import { Text, TextInput } from "react-native-paper"

const TextField = ({ label, ...inputProps }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput>
                { ...inputProps }
            </TextInput>
        </View>
    )
}

export default TextField