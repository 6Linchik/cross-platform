import { Student, Teacher, DepartmentHead } from "../../classes/lab6";

describe("Student", () => {
    test("should return correct information", () => {
        const student = new Student("John Doe", 12345);
        expect(student.aboutMe()).toBe(
            "I am a student. My name is John Doe. StudentID: 12345"
        );
    });

    test("should return studying message", () => {
        const student = new Student("John Doe", 12345);
        expect(student.study()).toBe("I am studying.");
    });
});

describe("Teacher", () => {
    test("should return correct information", () => {
        const teacher = new Teacher("Jane Smith", 54321);
        expect(teacher.aboutMe()).toBe(
            "I am a teacher. My name is Jane Smith. TeacherID: 54321"
        );
    });

    test("should return teaching message", () => {
        const teacher = new Teacher("Jane Smith", 54321);
        expect(teacher.teach()).toBe("I am teaching.");
    });
});

describe("DepartmentHead", () => {
    test("should return correct information", () => {
        const departmentHead = new DepartmentHead(
            "David Johnson",
            "Computer Science"
        );
        expect(departmentHead.aboutMe()).toBe(
            "I am the department head. My name is David Johnson. Department: Computer Science"
        );
    });

    test("should return managing message", () => {
        const departmentHead = new DepartmentHead(
            "David Johnson",
            "Computer Science"
        );
        expect(departmentHead.manage()).toBe("I am managing the department.");
    });

    test("should return teaching message", () => {
        const departmentHead = new DepartmentHead(
            "David Johnson",
            "Computer Science"
        );
        expect(departmentHead.teach()).toBe("I am teaching.");
    });
});
