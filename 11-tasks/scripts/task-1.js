runTaskButton.addEventListener('click', function () {
    console.log("Task #1");
    function getPromise(text, delay) {
        return new Promise(function (resolve) {
            setTimeout(() => resolve(text), delay);
        })
    }

    getPromise("test promise", 2000).then(function (data) {
        console.log(data);
    });
    getPromise("test next promise", 10000).then(function (data) {
        console.log(data);
    });

});