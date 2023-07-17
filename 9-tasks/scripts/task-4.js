// Task #4
checkLimit();
$('#taskFour input[type="checkbox"]').on('change', function (event) {
    event.preventDefault();
    checkLimit();
});

function checkLimit() {
    if($('#taskFour input[type="checkbox"]:checked').length >= 3) $('#taskFour input[type="checkbox"]').attr("disabled", true);
}