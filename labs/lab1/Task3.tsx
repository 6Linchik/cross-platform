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

const Task3 = () => {
    const [firstInput, setFirstInput] = useState<any>();
    const [res, setRes] = useState<any>([]);
    const [max, setMax] = useState<any>();
    const [min, setMin] = useState<any>();

    const calculate = () => {
        const arr = [];
        const defaultArr = [];
        for (let i = 0; i < firstInput; i++) {
            let arr2 = [];
            for (let j = 0; j < firstInput; j++) {
                const number = Number(
                    Math.random() * (10 - -10) + -10
                ).toFixed();
                arr2.push(number);
                defaultArr.push(number);
            }
            arr.push(arr2);
            arr2 = [];
        }
        defaultArr.sort((a: any, b: any) => a - b);
        setMin(defaultArr[0]);
        setMax(defaultArr[defaultArr.length - 1]);
        setRes(arr);
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
                Згенерувати матрицю розміром NxN. Знайти максимальне значення
                (позначити зеленим) та мінімальне (позначити синім).
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
            <Pressable
                style={({ pressed }) => [
                    { backgroundColor: pressed ? "#90EE90" : "#3CB371" },
                    styles.button,
                ]}
                onPress={calculate}
            >
                <Text style={styles.text}>Click</Text>
            </Pressable>
            <Text style={styles.res}>
                {res.map((elem: any, index: number) => {
                    return (
                        <View key={index}>
                            {elem.map((elem1: any, index: number) => {
                                if (elem1 === min) {
                                    return (
                                        <View
                                            key={index + elem1}
                                            style={{
                                                backgroundColor: "lightblue",
                                                width: 50,
                                                height: 50,
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text style={styles.elem}>
                                                {elem1}
                                            </Text>
                                        </View>
                                    );
                                } else if (elem1 === max) {
                                    return (
                                        <View
                                            key={index + elem1}
                                            style={{
                                                backgroundColor: "green",
                                                width: 50,
                                                height: 50,
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text style={styles.elem}>
                                                {elem1}
                                            </Text>
                                        </View>
                                    );
                                }
                                return (
                                    <View
                                        key={index + elem1}
                                        style={{
                                            backgroundColor: "white",
                                            width: 50,
                                            height: 50,
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Text style={styles.elem}>{elem1}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    );
                })}
            </Text>
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
    elem: {
        letterSpacing: 1,
        fontSize: 20,
    },
});

export default Task3;
