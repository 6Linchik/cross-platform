import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Pressable,
    Dimensions,
} from "react-native";
import React, { useState } from "react";
import _ from "lodash";
import { LineChart } from "react-native-chart-kit";

const Lab2 = () => {
    const [Xn, setXn] = useState("2.1");
    const [Xk, setXk] = useState("16.5");
    const [Xh, setXh] = useState("0.2");
    const [a, setA] = useState("5");

    const [arrX, setArrX] = useState([]);
    const [arrY, setArrY] = useState([]);

    function calculate() {
        if (
            isNaN(parseFloat(Xn)) ||
            isNaN(parseFloat(Xk)) ||
            isNaN(parseFloat(Xh)) ||
            isNaN(parseFloat(a))
        ) {
            alert("Input Error");
            return;
        }

        setArrX(
            _.range(parseFloat(Xn), parseFloat(Xk), parseFloat(Xh)).map(
                (elem: any) => {
                    return Number(elem.toFixed(2));
                }
            )
        );

        setArrY(
            _.range(parseFloat(Xn), parseFloat(Xk), parseFloat(Xh)).map(
                (elem: any) => {
                    if (elem <= 0) {
                        return Number(
                            Math.abs(
                                Math.pow(
                                    (2 * elem + 5) / (Math.pow(elem, 3) + 2),
                                    1 / 3
                                )
                            ).toFixed(2)
                        );
                    } else if (0 < elem && elem <= a) {
                        return Number(
                            (
                                Math.sqrt(Math.sin(Math.pow(elem, 2) + 3) + 4) /
                                (Math.pow(elem, 2) + 2)
                            ).toFixed(2)
                        );
                    } else if (elem > a) {
                        return Number(
                            (
                                Math.pow(Math.sin(elem + 2), 3) /
                                Math.log(
                                    Math.abs(Math.pow(elem, 2) + 3 * elem + 1)
                                )
                            ).toFixed(2)
                        );
                    }
                }
            )
        );
    }

    return (
        <>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#FDCEDF",
                }}
                showsVerticalScrollIndicator={false}
            >
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
                        Лабораторна робота №2
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
                        Вaріант №1
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "700",
                            paddingBottom: 5,
                            textAlign: "center",
                        }}
                    >
                        Створити додаток для табулювання і виведення на екран
                        значення функції, також побудувати графік функції:
                    </Text>
                </View>
                <Text
                    style={{
                        fontSize: 20,
                        alignSelf: "center",
                        marginTop: 10,
                        fontWeight: "700",
                    }}
                >
                    Xn
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
                    value={Xn}
                    onChangeText={(text) => setXn(text)}
                />
                <Text
                    style={{
                        fontSize: 20,
                        alignSelf: "center",
                        marginTop: 10,
                        fontWeight: "700",
                    }}
                >
                    Xk
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
                    value={Xk}
                    onChangeText={(text) => setXk(text)}
                />
                <Text
                    style={{
                        fontSize: 20,
                        alignSelf: "center",
                        marginTop: 10,
                        fontWeight: "700",
                    }}
                >
                    Xh
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
                    value={Xh}
                    onChangeText={(text) => setXh(text)}
                />
                <Text
                    style={{
                        fontSize: 20,
                        alignSelf: "center",
                        marginTop: 10,
                        fontWeight: "700",
                    }}
                >
                    a
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
                    value={a}
                    onChangeText={(text) => setA(text)}
                />

                <Pressable
                    style={({ pressed }) => [
                        { backgroundColor: pressed ? "#90EE90" : "#3CB371" },
                        styles.button,
                    ]}
                    onPress={calculate}
                >
                    <Text style={styles.text}>Calculate</Text>
                </Pressable>

                {arrX.length === 0 || arrY.length === 0 ? null : (
                    <LineChart
                        data={{
                            labels: arrX,
                            datasets: [
                                {
                                    data: arrY,
                                },
                            ],
                        }}
                        width={Dimensions.get("window").width - 16}
                        height={220}
                        chartConfig={{
                            backgroundColor: "#fff",
                            backgroundGradientFrom: "#fff",
                            backgroundGradientTo: "#fff",
                            color: (opacity = 1) => `black`,
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            alignSelf: "center",
                        }}
                    />
                )}
                {arrY.map((elem, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                paddingBottom: 30,
                                marginLeft: 20,
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.text,
                                    textAlign: "center",
                                    color: "black",
                                }}
                            >
                                x = {arrX[index]}; y = {elem}
                            </Text>
                        </View>
                    );
                })}
            </ScrollView>
        </>
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

export default Lab2;
