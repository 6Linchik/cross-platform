import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Pressable,
} from "react-native";
import React, { useState } from "react";
import _ from "lodash";

const Task2 = () => {
    const [firstInput, setFirstInput] = useState<any>();
    const [secondInput, setSecondInput] = useState<any>();
    const [res, setRes] = useState(null);

    const calculate = () => {
        const arr = _.range(firstInput, secondInput + 1);
        setRes(
            arr.reduce((sum: number, elem: any) => {
                if (elem % 11 === 0) {
                    return sum + elem;
                }
                if (elem % 8 === 5) {
                    return sum + elem;
                }
                return sum;
            }, 0)
        );
    };

    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: "#FDCEDF",
            }}
        >
            <Text
                style={{ ...styles.text, color: "black", textAlign: "center" }}
            >
                На заданому проміжку чисел [a,b] знайти суму всіх, які кратні 11
                та при діленні на 8 дають в остачі 5.
            </Text>
            <TextInput
                style={{
                    backgroundColor: "white",
                    margin: 15,
                    fontSize: 20,
                    padding: 10,
                    borderWidth: 3,
                    borderColor: "white",
                    borderRadius: 15,
                    fontWeight: "700",
                }}
                onChangeText={(text) => setFirstInput(parseInt(text))}
            />
            <TextInput
                style={{
                    backgroundColor: "white",
                    margin: 15,
                    fontSize: 20,
                    padding: 10,
                    borderWidth: 3,
                    borderColor: "white",
                    borderRadius: 15,
                    fontWeight: "700",
                }}
                onChangeText={(text) => setSecondInput(parseInt(text))}
            />
            <Pressable
                style={({ pressed }) => [
                    { backgroundColor: pressed ? "#90EE90" : "#3CB371" },
                    styles.button,
                ]}
                onPress={calculate}
            >
                <Text style={styles.text}>Click</Text>
            </Pressable>
            <Text style={styles.res}>{res}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        alignSelf: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 16,
        elevation: 3,
        width: 130,
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
    res: {
        alignSelf: "center",
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        marginTop: 20,
    },
});

export default Task2;
