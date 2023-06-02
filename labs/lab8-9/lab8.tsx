import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Pressable,
} from "react-native";
import React, { useState } from "react";
import {
    nameValidator,
    dateReleaseValidator,
    numberValidator,
    numOfPagesValidator,
    listOfArticlesValidator,
    listOfArticles,
    NewsPaper,
} from "./validation";
import Edit from "./edit";

const Lab8 = () => {
    const [newsPapers, setNewsPapers] = useState<NewsPaper[]>([]);
    const [editNewsPapers, setEditNewsPapers] = useState<NewsPaper[]>([]);

    const [name, setName] = useState("");
    const [number, setNumber] = useState<number>(0);
    const [dateRelease, setDateRelease] = useState("");
    const [numOfPages, setNumOfPages] = useState(0);

    const [list, setList] = useState<listOfArticles[]>([]);

    const [editable, setEditable] = useState(false);

    const addItem = () => {
        setList([...list, { id: Date.now(), value: "" }]);
    };
    const deleteItem = (id: number) => {
        setList(
            list.filter((elem: any) => {
                return elem.id !== id;
            })
        );
    };
    const inputChange = (id: number, text: string, key: string) => {
        setList(
            list.map((elem: any) => {
                if (elem.id === id) {
                    return { ...elem, [key]: text };
                }
                return elem;
            })
        );
    };

    const editChange = (
        elIndex: number,
        key: string,
        text: string,
        id: any = null
    ) => {
        setEditNewsPapers(
            editNewsPapers.map((elem: any, index) => {
                if (index === elIndex) {
                    if (id) {
                        const newArr = elem.listOfTeachers.map((elem1: any) => {
                            if (elem1.id === id) {
                                return { ...elem1, ["value"]: text };
                            }
                            return elem1;
                        });
                        return {
                            ...elem,
                            [key]: newArr,
                        };
                    }
                    return { ...elem, [key]: text };
                }
                return elem;
            })
        );
    };

    const addNewsPaper = () => {
        const newNewsPaper = {
            name: name,
            number: number,
            dateRelease: dateRelease,
            numOfPages: numOfPages,
            listOfArticles: list,
        };
        if (!nameValidator(newNewsPaper).isValid) {
            alert(nameValidator(newNewsPaper).message);
            return;
        }
        if (!dateReleaseValidator(newNewsPaper).isValid) {
            alert(dateReleaseValidator(newNewsPaper).message);
            return;
        }
        if (!numberValidator(newNewsPaper).isValid) {
            alert(numberValidator(newNewsPaper).message);
            return;
        }
        if (!numOfPagesValidator(newNewsPaper).isValid) {
            alert(numOfPagesValidator(newNewsPaper).message);
            return;
        }
        if (!listOfArticlesValidator(newNewsPaper).isValid) {
            alert(listOfArticlesValidator(newNewsPaper).message);
            return;
        }
        setNewsPapers([...newsPapers, newNewsPaper]);
        setEditNewsPapers([...newsPapers, newNewsPaper]);
    };

    return (
        <>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#FDCEDF",
                }}
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
                        Лабораторна робота №8-9
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
                    <Text style={{ textAlign: "center" }}>
                        1. Розробити компонент який буде вміщувати динамічну
                        реактивну форму відповідно до варіанту. 2. Передбачити у
                        формі можливість додавання та видалення певних полів під
                        час виконання. 3. Провести валідування ведених у форму
                        значень, як за допомогою списку статичних методів класу
                        Validators. 4. Створити сервіси для більш точного
                        валідування ведених даних, кількість сервісів не менше
                        двох. 5. Створити модульні тести для перевірки сервісів
                        та функцій для валідування
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
                    Назва газети
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
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Text
                    style={{
                        fontSize: 20,
                        alignSelf: "center",
                        marginTop: 10,
                        fontWeight: "700",
                    }}
                >
                    Номер газети
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
                    value={number.toString()}
                    onChangeText={(text: string) =>
                        setNumber(parseInt(text) ? parseInt(text) : 0)
                    }
                />
                <Text
                    style={{
                        fontSize: 20,
                        alignSelf: "center",
                        marginTop: 10,
                        fontWeight: "700",
                    }}
                >
                    Дата виходу
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
                    value={dateRelease}
                    onChangeText={(text) => setDateRelease(text)}
                />

                <Text
                    style={{
                        fontSize: 20,
                        alignSelf: "center",
                        marginTop: 10,
                        fontWeight: "700",
                    }}
                >
                    Кількість сторінок
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
                    value={numOfPages.toString()}
                    onChangeText={(text) =>
                        setNumOfPages(isNaN(Number(text)) ? 0 : Number(text))
                    }
                />
                <View
                    style={{
                        flexDirection: "column",
                        alignSelf: "center",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 23,
                            alignSelf: "center",
                            marginTop: 10,
                            fontWeight: "700",
                        }}
                    >
                        Список статей{" "}
                    </Text>
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? "#90EE90"
                                    : "#3CB371",
                            },
                            styles.button,
                            { width: 270, marginBottom: 30 },
                        ]}
                        onPress={addItem}
                    >
                        <Text style={styles.text}>Додати статтю</Text>
                    </Pressable>
                </View>
                <View>
                    {list.map((elem: any) => {
                        return (
                            <View
                                key={elem.id}
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
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
                                        flex: 1,
                                    }}
                                    value={elem.value}
                                    onChangeText={(text: string) =>
                                        inputChange(elem.id, text, "value")
                                    }
                                />
                                <Pressable
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed
                                                ? "#90EE90"
                                                : "#3CB371",
                                        },
                                        {
                                            width: 30,
                                            height: 30,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: 12,
                                            marginRight: 15,
                                        },
                                    ]}
                                    onPress={() => deleteItem(elem.id)}
                                >
                                    <Text style={styles.text}>х</Text>
                                </Pressable>
                            </View>
                        );
                    })}
                </View>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#90EE90" : "#3CB371",
                        },
                        styles.button,
                        { width: 240 },
                    ]}
                    onPress={addNewsPaper}
                >
                    <Text style={styles.text}>Додати газету</Text>
                </Pressable>
                <Edit
                    editable={editable}
                    streets={newsPapers}
                    editChange={editChange}
                />
                {newsPapers.length !== 0 ? (
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? "#90EE90"
                                    : "#3CB371",
                            },
                            styles.button,
                            { marginBottom: 30, width: 210 },
                        ]}
                        onPress={() => {
                            if (editable) {
                                let flag = true;
                                editNewsPapers.forEach((newNewsPaper: any) => {
                                    if (!nameValidator(newNewsPaper).isValid) {
                                        alert(
                                            nameValidator(newNewsPaper).message
                                        );
                                        flag = false;
                                        return;
                                    }
                                    if (
                                        !dateReleaseValidator(newNewsPaper)
                                            .isValid
                                    ) {
                                        alert(
                                            dateReleaseValidator(newNewsPaper)
                                                .message
                                        );
                                        flag = false;
                                        return;
                                    }
                                    if (
                                        !numberValidator(newNewsPaper).isValid
                                    ) {
                                        alert(
                                            numberValidator(newNewsPaper)
                                                .message
                                        );
                                        flag = false;
                                        return;
                                    }
                                    if (
                                        !numOfPagesValidator(newNewsPaper)
                                            .isValid
                                    ) {
                                        alert(
                                            numOfPagesValidator(newNewsPaper)
                                                .message
                                        );
                                        flag = false;
                                        return;
                                    }
                                    if (
                                        !listOfArticlesValidator(newNewsPaper)
                                            .isValid
                                    ) {
                                        alert(
                                            listOfArticlesValidator(
                                                newNewsPaper
                                            ).message
                                        );
                                        flag = false;
                                        return;
                                    }
                                });
                                if (!flag) return;
                                setNewsPapers([...editNewsPapers]);
                            }
                            setEditable(!editable);
                        }}
                    >
                        {editable ? (
                            <Text style={styles.text}>Submit</Text>
                        ) : (
                            <Text style={styles.text}>Edit</Text>
                        )}
                    </Pressable>
                ) : null}
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
        width: 180,
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
        alignSelf: "center",
    },
    textDesc: {
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
    input: {
        backgroundColor: "white",
        margin: 10,
        fontSize: 20,
        padding: 5,
        flex: 1,
    },
});

export default Lab8;
