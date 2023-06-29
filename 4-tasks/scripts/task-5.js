// Task #5
const runTaskButton = document.querySelector("#taskFive");

runTaskButton.addEventListener('click', function () {
    console.log("Task #5");
    const userIds = [7, -12, 44, -22];
    // const userIds = [7, 0, 44, 22];
    const userList = showUsers(userIds);
    console.log(userList);
    alert("Check the console");
});

function showUser(id) {
    if (id < 0) {
        throw new RangeError('Invalid user ID. ID must be a positive number.');
    }
    return { id };
}

function showUsers(ids) {
    const users = [];
    for (let id of ids) {
        try {
            const user = showUser(id);
            users.push(user);
        } catch (error) {
            console.error(error.message);
        }
    }
    return users;
}