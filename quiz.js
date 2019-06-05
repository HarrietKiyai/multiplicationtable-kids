$(document).ready(function () {
    $("form button").click(function (event) {
        event.preventDefault()
    });
    $("h3").css("text-align", "center")
        .css("font-size", "30px");
    $("body").css("background-image", 'url("para.png")');

    $("#check").click(function () {
        var a = parseInt($("#num1").val());
        var b = parseInt($("#num2").val());
        if ($("#ans").val() == a * b) {
            return $("#right")
                .html("Well done!")
                .css("background-color", "green");
        } else {
            return $("#wrong")
                .html("Try again!")
                .css("background-color", "red");
        }

    });
});
$("body").css("background-image", 'url("para.png")');