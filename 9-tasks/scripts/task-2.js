// Task #2
$(".jqueryLinks").each(function() {
    const testExpression = /^https:\/\//i;
    if(testExpression.test($(this).attr('href'))) $(this).attr('target', '_blank');
})