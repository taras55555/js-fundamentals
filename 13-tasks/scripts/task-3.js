// Task #3
const runTaskButton = document.querySelector("#taskThree");

runTaskButton.addEventListener('click', function () {
    getText("https://randomuser.me/api/");
    async function getText(file) {
        let request = await fetch(file);
        let responce = await request.text();
        const jsonObject = JSON.parse(responce);

        const {...args} = jsonObject.results[0];
        const resultText = `avatar: ${args.picture.large}<br>
        name: ${Object.values(args.name).join(' ')}<br>
        age: ${args.dob.age}<br>
        gender: ${args.gender}<br>
        country: ${args.location.country}<br>
        username: ${args.login.username}<br>
        password: ${args.login.password}<br>
        email: ${args.email}`
    
        taskThreeContent.innerHTML = resultText

      }
});