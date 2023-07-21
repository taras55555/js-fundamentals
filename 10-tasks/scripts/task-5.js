// Task #5
const runTaskButton = document.querySelector("#taskFive");

runTaskButton.addEventListener('click', function () {
   console.log("Task #5");
   let arr = [];
   for (let i = 0; i <= 2; i++) {
      arr[i] = function () {
         console.log(i);
      };
   }
   arr[0](); // 0
   arr[arr.length - 1](); // 2
});