window.onload = function () {
  createTable();
};

function createTable() {
  var table1 = "";
  var table2 = "";
  var table3 = "";
  var table4 = "";
  var table5 = "";
  var table6 = "";

  var i;
  for (i = 1; i <= 12; i++) {
    table1 += "<li>" + i + "x " + 1 + " = " + i * 1 + "</li>";
    document.getElementById("tab1").innerHTML = table1;
    table2 += "<li>" + i + "x " + 2 + " = " + i * 2 + "</li>";
    document.getElementById("tab2").innerHTML = table2;
    table3 += "<li>" + i + "x " + 3 + " = " + i * 3 + "</li>";
    document.getElementById("tab3").innerHTML = table3;
    table4 += "<li>" + i + "x " + 4 + " = " + i * 4 + "</li>";
    document.getElementById("tab4").innerHTML = table4;
    table5 += "<li>" + i + "x " + 5 + " = " + i * 5 + "</li>";
    document.getElementById("tab5").innerHTML = table5;
    table6 += "<li>" + i + "x " + 6 + " = " + i * 6 + "</li>";
    document.getElementById("tab6").innerHTML = table6;
  }


  $(document).ready(function () {
    $("#check").click(function () {
      var a = parseInt($("#num1").val());
      var b = parseInt($("#num2").val());
      if ($("#ans").val() == (a * b)) {
        return ($("#right").html("Well done!"));
      } else {
        return $("#wrong").html("Try again!");
      }

    });
  });

  $("input:text").focus(
    function () {
      $(this).val('');
    });
}