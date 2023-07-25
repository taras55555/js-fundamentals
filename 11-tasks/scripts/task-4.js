// Task #4
const runTaskButton = document.querySelector("#taskFour");

runTaskButton.addEventListener('click', function () {
    console.log("Task #4");

    const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

    async function showNumbers() {
        // your code with using delay(i, time)
        const sequence = [];
        const n = 2000;
        for (let i = 0; i <= 10; i++) {
            
            const interval = Math.floor(Math.random() * n);
            console.log(interval);
            sequence.push(await delay(i, interval));
        }
        console.log(sequence.join());
    }
    showNumbers();
});
