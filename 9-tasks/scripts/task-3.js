// Task #3
$('#taskThree h3').each(function() {
    $(this).next('div').insertBefore($(this));
})
