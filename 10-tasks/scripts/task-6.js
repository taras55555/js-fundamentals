// Task #6
const runTaskButton = document.querySelector("#taskSix");

let server = {
   data: 0,
   convertToString: function (callback) {
      callback((function () {
         return this.data + "";
      }).bind(this));
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {
      return (function (callback) {
         this.result = callback();
      }).bind(this);
   }
};

runTaskButton.addEventListener('click', function () {
   console.log("Task #6");
   alert("The solution for this task is currently unavailable.");
   client.calc(123);
   console.log(client.result); // "123"
   console.log(typeof client.result); // "string"
});