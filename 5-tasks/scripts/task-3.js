// Task #3
const runTaskButton = document.querySelector("#taskThree");

runTaskButton.addEventListener('click', function () {
    console.log("Task #3");
    const person = new Person("Taras", "Kaminskyi");
    console.log(person.showFullName());

    const student = new Student("Taras", "Kaminskyi", 2017);
    console.log(student.showFullName("Stepanovych"));
    console.log("Current course: " + student.showCourse());
    alert("Check the console");
});

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return this.name.concat(" ", this.surname);
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName) {
        return super.showFullName().concat(" ", midleName);
    }

    showCourse() {
        const studyDurationYears = 6;
        const courseStartMonth = 8;
        const currentDate = new Date();
        const startStudyDate = new Date(this.year, courseStartMonth, 1);
        let yearDifference = currentDate.getMonth() < courseStartMonth ? currentDate.getFullYear() - startStudyDate.getFullYear() : currentDate.getFullYear() - startStudyDate.getFullYear() + 1;
        return yearDifference <= studyDurationYears ? yearDifference : "Already a graduate";
    }
}

// Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить у консоль ім’я і прізвище особи. ✓
// Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету). ✓
// В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента. ✓
// Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.