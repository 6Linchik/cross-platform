import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Student, Teacher, DepartmentHead } from "../../classes/lab6";

const Lab6 = () => {
    const student = new Student("Lina", 1);
    const teacher = new Teacher("Ivan", 2);
    const zavKafedry = new DepartmentHead(
        "Olena",
        "Department of artificial intelligence"
    );

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
                    Лабораторна робота №6
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
                    Розробити ієрархію класів відповідно до варіанту завдання
                </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 50 }}>
                <View style={{ marginBottom: 50, alignItems: "center" }}>
                    <Text style={styles.text}>Student</Text>
                    <Text style={styles.text}>{student.aboutMe()}</Text>
                    <Text style={styles.text}>{student.study()}</Text>
                </View>
                <View style={{ marginBottom: 50, alignItems: "center" }}>
                    <Text style={styles.text}>Teacher</Text>
                    <Text style={styles.text}>{teacher.aboutMe()}</Text>
                    <Text style={styles.text}>{teacher.teach()}</Text>
                </View>
                <View style={{ marginBottom: 50, alignItems: "center" }}>
                    <Text style={styles.text}>Department head</Text>
                    <Text style={{ ...styles.text, textAlign: "center" }}>
                        {zavKafedry.aboutMe()}
                    </Text>
                    <Text style={styles.text}>{zavKafedry.manage()}</Text>
                    <Text style={styles.text}>{zavKafedry.teach()}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        paddingBottom: 15,
    },
});

export default Lab6;
