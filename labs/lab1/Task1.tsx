import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Pressable,
} from "react-native";
import React, { useState } from "react";

const Task1 = () => {
    const [firstInput, setFirstInput] = useState<any>();
    const [secondInput, setSecondInput] = useState<any>();
    const [thirdInput, setThirdInput] = useState<any>();
    const [res, setRes] = useState<any>(null);

    const calculate = () => {
        let summ = 0;
        if (firstInput % 7 === 0) {
            summ += Math.pow(parseInt(firstInput), 3);
        }
        if (secondInput % 7 === 0) {
            summ += Math.pow(parseInt(secondInput), 3);
        }
        if (thirdInput % 7 === 0) {
            summ += Math.pow(parseInt(thirdInput), 3);
        }
        setRes(summ);
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
                Задано три числа. Знайти суму кубів тих з них, які кратні 7.
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
                onChangeText={(text) =>
                    setFirstInput(isNaN(parseInt(text)) ? 0 : parseInt(text))
                }
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
                onChangeText={(text) =>
                    setSecondInput(isNaN(parseInt(text)) ? 0 : parseInt(text))
                }
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
                onChangeText={(text) =>
                    setThirdInput(isNaN(parseInt(text)) ? 0 : parseInt(text))
                }
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
            <Text style={styles.res}>{res ? "Result =" + res : null}</Text>
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
        width: 160,
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

export default Task1;
