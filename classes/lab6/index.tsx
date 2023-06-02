interface Teachable {
    teach(): string;
}

interface Manageable {
    manage(): string;
}

abstract class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract aboutMe(): string;
}

export class Student extends Person {
    private studentId: number;

    constructor(name: string, studentId: number) {
        super(name);
        this.studentId = studentId;
    }

    aboutMe(): string {
        return `I am a student. My name is ${this.name}. StudentID: ${this.studentId}`;
    }

    study(): string {
        return `I am studying.`;
    }
}

export class Teacher extends Person implements Teachable {
    private teacherId: number;

    constructor(name: string, teacherId: number) {
        super(name);
        this.teacherId = teacherId;
    }

    aboutMe(): string {
        return `I am a teacher. My name is ${this.name}. TeacherID: ${this.teacherId}`;
    }

    teach(): string {
        return `I am teaching.`;
    }
}

export class DepartmentHead extends Person implements Manageable, Teachable {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    aboutMe(): string {
        return `I am the department head. My name is ${this.name}. Department: ${this.department}`;
    }

    manage(): string {
        return `I am managing the department.`;
    }

    teach(): string {
        return `I am teaching.`;
    }
}
