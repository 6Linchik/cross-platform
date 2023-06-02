import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { NewsPaper } from "./validation";
const Edit = (props: any) => {
    return (
        <View>
            {props.editable
                ? props.streets.map((elem: NewsPaper, index: any) => {
                      return (
                          <View
                              key={index}
                              style={{ marginBottom: 10, marginTop: 10 }}
                          >
                              <Text style={styles.textDesc}>
                                  Газета №{index + 1}
                              </Text>
                              <Text style={styles.textDesc}>Назва газети:</Text>
                              <TextInput
                                  defaultValue={elem.name}
                                  onChangeText={(text) =>
                                      props.editChange(index, "name", text)
                                  }
                                  style={styles.text}
                              ></TextInput>
                              <Text style={styles.textDesc}>Номер газети:</Text>
                              <TextInput
                                  defaultValue={elem.number.toString()}
                                  onChangeText={(text) =>
                                      props.editChange(index, "number", text)
                                  }
                                  style={styles.text}
                              ></TextInput>
                              <Text style={styles.textDesc}>Дата виходу</Text>
                              <TextInput
                                  defaultValue={elem.dateRelease}
                                  onChangeText={(text) =>
                                      props.editChange(
                                          index,
                                          "dateRelease",
                                          text
                                      )
                                  }
                                  style={styles.text}
                              ></TextInput>
                              <Text style={styles.textDesc}>
                                  Кількість сторінок:
                              </Text>
                              <TextInput
                                  defaultValue={elem.numOfPages.toString()}
                                  onChangeText={(text) =>
                                      props.editChange(
                                          index,
                                          "numOfPages",
                                          text
                                      )
                                  }
                                  style={styles.text}
                              ></TextInput>
                              {elem.listOfArticles.length === 0 ? null : (
                                  <View>
                                      <Text style={styles.textDesc}>
                                          Список викладачів кафедри:
                                      </Text>
                                      {elem.listOfArticles.map(
                                          (elem1: any, index1) => {
                                              return (
                                                  <TextInput
                                                      key={index1}
                                                      style={styles.text}
                                                      defaultValue={elem1.value}
                                                      onChangeText={(text) =>
                                                          props.editChange(
                                                              index,
                                                              "listOfArticles",
                                                              text,
                                                              elem1.id
                                                          )
                                                      }
                                                  ></TextInput>
                                              );
                                          }
                                      )}
                                  </View>
                              )}
                          </View>
                      );
                  })
                : props.streets.map((elem: NewsPaper, index: any) => {
                      return (
                          <View
                              key={index}
                              style={{ marginBottom: 10, marginTop: 10 }}
                          >
                              <Text style={styles.textDesc}>
                                  Газета №{index + 1}
                              </Text>
                              <Text style={styles.text}>
                                  Назва газети - {elem.name}
                              </Text>
                              <Text style={styles.text}>
                                  Номер газети - {elem.number}
                              </Text>
                              <Text style={styles.text}>
                                  Дата виходу - {elem.dateRelease}
                              </Text>
                              <Text style={styles.text}>
                                  Кількість сторінок - {elem.numOfPages}
                              </Text>
                              {elem.listOfArticles.length === 0 ? null : (
                                  <View>
                                      <Text style={styles.textDesc}>
                                          Список статтей:
                                      </Text>
                                      {elem.listOfArticles.map(
                                          (elem: any, index) => {
                                              return (
                                                  <Text
                                                      key={index}
                                                      style={styles.text}
                                                  >
                                                      {index +
                                                          1 +
                                                          ")" +
                                                          "  " +
                                                          elem.value}
                                                  </Text>
                                              );
                                          }
                                      )}
                                  </View>
                              )}
                          </View>
                      );
                  })}
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        alignSelf: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        width: 180,
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        alignSelf: "center",
        textAlign: "center",
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
        backgroundColor: "black",
        margin: 10,
        fontSize: 20,
        padding: 5,
        flex: 1,
    },
});

export default Edit;
