exports.date = (userName) => {
    const date = new Date();
    const currentHour = date.getHours();
    if (currentHour == 23 || currentHour < 5) {
        greeting = "Good Night";
    } else if (currentHour >= 5 && currentHour < 11) {
        greeting = "Good Morning";
    } else if (currentHour >= 11 && currentHour < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return `${date}\n${greeting}, ${userName}`
}