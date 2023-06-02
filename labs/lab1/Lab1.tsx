import BottomTabNavigator from "../../navigation/bottomTabNavigator";
import { Text, View } from "react-native";

export default function Lab1() {
    return (
        <>
            <View
                style={{
                    backgroundColor: "#FDCEDF",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "700",
                    }}
                >
                    Лабораторна робота №1
                </Text>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "700",
                        paddingBottom: 5,
                        textAlign: "center",
                    }}
                >
                    Виконала студентка КН-32 Баштова Аліна Віталіївна
                </Text>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "700",
                        paddingBottom: 5,
                        textAlign: "center",
                    }}
                >
                    Варіант №1
                </Text>
            </View>
            <BottomTabNavigator />
        </>
    );
}
