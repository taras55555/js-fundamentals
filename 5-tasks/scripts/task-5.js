// Task #5
const runTaskButton = document.querySelector("#taskFive");

runTaskButton.addEventListener('click', function () {
    console.log("Task #5");
    let worker1 = new Worker("John Johnson", 20, 23);
    console.log(worker1.fullName);
    console.log("\n" + worker1.fullName + " salary: " + worker1.showSalary());
    console.log("New experience: " + worker1.showExp());
    console.log(worker1.fullName + " salary: " + worker1.showSalaryWithExperience());
    worker1.setExp(1.5);
    console.log("New experience: " + worker1.showExp());
    console.log(worker1.fullName + " salary: " + worker1.showSalaryWithExperience() + "\n");

    let worker2 = new Worker("Tom Tomson", 48, 22);
    console.log("\n" + worker2.fullName);
    console.log("\n" + worker2.fullName + " salary: " + worker2.showSalary());
    console.log("New experience: " + worker2.showExp());
    console.log(worker2.fullName + " salary: " + worker2.showSalaryWithExperience());
    worker2.setExp(1.5);
    console.log("New experience: " + worker2.showExp());
    console.log(worker2.fullName + " salary: " + worker2.showSalaryWithExperience() + "\n");

    let worker3 = new Worker("Andy Ander", 29, 23);
    console.log("\n" + worker3.fullName);
    console.log("\n" + worker3.fullName + " salary: " + worker3.showSalary());
    console.log("New experience: " + worker3.showExp());
    console.log(worker3.fullName + " salary: " + worker3.showSalaryWithExperience());
    worker3.setExp(1.5);
    console.log("New experience: " + worker3.showExp());
    console.log(worker3.fullName + " salary: " + worker3.showSalaryWithExperience() + "\n");

    console.log("\nUnsorted salary:");
    const array = [worker1, worker2, worker3];
    console.log(array);
    
    console.log("\nSorted salary:");
    array.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience())
    console.log(array);

});

class Worker {
    #experience;
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this.#experience = 1.2;
    }

    showSalary() {
        return this.dayRate * this.workingDays;
    }

    showExp() {
        return this.#experience;
    }
    setExp(newExperience) {
        this.#experience = newExperience;
    }

    showSalaryWithExperience() {
        return this.showSalary() * this.#experience;
    }
}