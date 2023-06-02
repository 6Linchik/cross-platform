import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";

import { useState } from "react";
import { QuadraticPolynomial, CubicPolynomial } from "../../classes/lab4-5";
export default function Lab4() {
    const [arr, setArr] = useState<(QuadraticPolynomial | CubicPolynomial)[]>(
        []
    );
    const [maxValue, setMaxValue] = useState<number | undefined>(undefined);

    function calculate(): void {
        const res = [];
        for (let i = 0; i < 5; i++) {
            if (i % 2 === 0) {
                res.push(
                    new QuadraticPolynomial(
                        `Quadratic ${i + 1}`,
                        3 + i,
                        2 * (i + 1),
                        -3 + i,
                        1 + 2 * i
                    )
                );
            } else {
                res.push(
                    new CubicPolynomial(
                        `Cubic ${i + 1}`,
                        4 + i,
                        1 + 2 * i,
                        -2 - i,
                        3 + i,
                        -4 + i
                    )
                );
            }
        }
        setArr(res);
    }
    function findMaxValue(): void {
        const values = arr.map((elem) => {
            return elem.calculate();
        });
        setMaxValue(
            values.sort((a, b) => a - b)[values.length - 1] || undefined
        );
    }

    function funcMap(
        elem: CubicPolynomial | QuadraticPolynomial,
        index: number
    ): JSX.Element {
        if (elem instanceof QuadraticPolynomial) {
            return (
                <View key={index} style={{ marginTop: 20 }}>
                    <Text style={styles.text}>Name = {elem.name}</Text>
                    <Text style={styles.text}>x = {elem.x}</Text>
                    <Text style={styles.text}>
                        coefficientA = {elem.coefficientA}
                    </Text>
                    <Text style={styles.text}>
                        coefficientB = {elem.coefficientB}
                    </Text>
                    <Text style={styles.text}>
                        coefficientC = {elem.coefficientC}
                    </Text>
                    <Text style={styles.text}>
                        Значення багаточлену = {elem.calculate()}
                    </Text>
                </View>
            );
        }
        return (
            <View key={index} style={{ marginTop: 20 }}>
                <Text style={styles.text}>Name = {elem.name}</Text>
                <Text style={styles.text}>x = {elem.x}</Text>
                <Text style={styles.text}>
                    coefficientA = {elem.coefficientA}
                </Text>
                <Text style={styles.text}>
                    coefficientB = {elem.coefficientB}
                </Text>
                <Text style={styles.text}>
                    coefficientC = {elem.coefficientC}
                </Text>
                <Text style={styles.text}>
                    coefficientD = {elem.coefficientD}
                </Text>
                <Text style={styles.text}>
                    Значення багаточлену = {elem.calculate()}
                </Text>
            </View>
        );
    }

    return (
        <ScrollView style={{ backgroundColor: "#FDCEDF" }}>
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
                    Лабораторна робота №4
                </Text>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "700",
                        paddingBottom: 5,
                        textAlign: "center",
                    }}
                >
                    Виконала студентка КН-32 Баштова Аліна Віталіївна Варіант №1
                </Text>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: "700",
                        paddingBottom: 5,
                        textAlign: "center",
                    }}
                >
                    Скласти програму з абстрактним батьківським класом і двома
                    об'єктами – нащадками.
                    Реалізувати циклічне виведення параметрів об'єктів, використовуючи 
                    поліморфний контейнер -
                     масив об'єктів базового класу (кількість об'єктів {">"}= 5)
                    Знайти значення найменшої щільності населення
                </Text>
            </View>

            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? "#90EE90" : "#3CB371",
                    },
                    styles.button,

                    { marginBottom: 30, width: 180 },
                ]}
                onPress={calculate}
            >
                <Text style={{ ...styles.text, color: "white" }}>Display</Text>
            </Pressable>
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? "#90EE90" : "#3CB371",
                    },
                    styles.button,
                    { marginBottom: 30, width: 130 },
                ]}
                onPress={findMaxValue}
            >
                <Text style={{ ...styles.text, color: "white" }}>Find</Text>
            </Pressable>
            {arr.map(funcMap)}
            {maxValue ? (
                <Text
                    style={[
                        styles.text,
                        {
                            marginTop: 40,
                            marginBottom: 50,
                            textAlign: "center",
                        },
                    ]}
                >
                    Найбільше значення багаточлену = {maxValue}
                </Text>
            ) : null}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        alignSelf: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 16,
        elevation: 3,
        width: 200,
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        alignSelf: "center",
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
