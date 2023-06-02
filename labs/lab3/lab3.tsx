import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Pressable,
    ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import _ from "lodash";

const Lab3 = () => {
    const [author, setAuthor] = useState("");
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getData() {
        setLoading(true);
        await fetch("https://api.jsonbin.io/v3/qs/6479cd90b89b1e2299a8c063")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data.record);
                setLoading(false);
            });
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
                        Лабораторна робота №3
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
                        Варіант №1
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "700",
                            paddingBottom: 5,
                            textAlign: "center",
                        }}
                    >
                        Необхідно додати у розроблений в попередній лабораторній
                        роботі застосунок сторінку для обробки JSON файлу
                        отриманого з серверу.
                    </Text>
                </View>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#90EE90" : "#3CB371",
                        },
                        styles.button,
                    ]}
                    onPress={getData}
                >
                    <Text
                        style={{ ...styles.text, color: "white", fontSize: 20 }}
                    >
                        Load data
                    </Text>
                </Pressable>
                {loading ? (
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"
                        style={{ marginTop: 100 }}
                    />
                ) : (
                    <>
                        <View style={{ marginTop: 30 }}>
                            {data.length === 0 ? null : (
                                <>
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
                                        placeholder="Введіть фамілію автора"
                                        onChangeText={(text) => setAuthor(text)}
                                    />
                                    <Pressable
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed
                                                    ? "#90EE90"
                                                    : "#3CB371",
                                            },
                                            styles.button,
                                            { marginBottom: 30, width: 230 },
                                        ]}
                                        onPress={() => setSearch(author)}
                                    >
                                        <Text
                                            style={{
                                                ...styles.text,
                                                color: "white",
                                                fontSize: 20,
                                            }}
                                        >
                                            Find author
                                        </Text>
                                    </Pressable>
                                </>
                            )}
                            {data.map((elem: any, index: number) => {
                                if (
                                    elem.author.includes(search) &&
                                    search !== ""
                                ) {
                                    return (
                                        <View
                                            key={index}
                                            style={{
                                                borderWidth: 1,
                                                backgroundColor: "#3CB371",
                                                width: 300,
                                                alignSelf: "center",
                                                marginBottom: 20,
                                            }}
                                        >
                                            <Text style={styles.text}>
                                                Автор {elem.author}
                                            </Text>
                                            <Text style={styles.text}>
                                                Назва {elem.title}
                                            </Text>
                                            <Text style={styles.text}>
                                                Кількість сторінок {elem.pages}
                                            </Text>
                                            <Text style={styles.text}>
                                                Рік видання {elem.year}
                                            </Text>
                                        </View>
                                    );
                                }
                                return (
                                    <View
                                        key={index}
                                        style={{
                                            borderWidth: 1,
                                            width: 300,
                                            alignSelf: "center",
                                            marginBottom: 20,
                                        }}
                                    >
                                        <Text style={styles.text}>
                                            Автор {elem.author}
                                        </Text>
                                        <Text style={styles.text}>
                                            Назва {elem.title}
                                        </Text>
                                        <Text style={styles.text}>
                                            Кількість сторінок {elem.pages}
                                        </Text>
                                        <Text style={styles.text}>
                                            Рік видання {elem.year}
                                        </Text>
                                    </View>
                                );
                            })}
                        </View>
                    </>
                )}
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
        width: 200,
    },
    text: {
        fontSize: 16,
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

export default Lab3;
