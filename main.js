function createTable() {
  var table = document.createElement("table");

  table.setAttribute("id", "multTable"); // Creates ids

  var arrHead = new Array(); //Array for table head
  arrHead = ["num1", "times"];
  var arrValue = new Array(); //Table values
  arrValue.push(["1 x 1", "<input>"]);
  arrValue.push(["1 x 2", "<input>"]);
  arrValue.push(["1 x 3", "<input>"]);
  arrValue.push(["1 x 4", "<input>"]);
  arrValue.push(["1 x 5", "<input>"]);
  arrValue.push(["1 x 6", "<input>"]);
  arrValue.push(["1 x 7", "<input>"]);
  arrValue.push(["1 x 8", "<input>"]);
  arrValue.push(["1 x 9", "<input>"]);
  arrValue.push(["1 x 10", "<input>"]);
  arrValue.push(["1 x 11", "<input>"]);
  arrValue.push(["1 x 12", "<input>"]);

  var tr = table.insertRow(-1);

  //Table head
  for (var i = 0; i < arrHead.length; i++) {
    var th = document.createElement("th");
    th.innerHtml = arrHead[i];
    tr.appendChild(th);
  }

  for (var a = 0; a <= arrValue.length - 1; a++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < arrHead.length; j++) {
      var td = document.createElement("td");
      td = tr.insertCell(-1);
      td.innerHTML = arrValue[a][j]; //Add table values
    }
  }
  document.body.appendChild(table); //Insert to body
}

function getTableValues() {
  var multTable = document.getElementById("multTable");

  //Create table div element
  var div = document.createElement("div");
  div.innerHTML = "";
  div.innerHTML = "<br/>";

  for (var b = 1; b <= multTable.rows.length - 1; b++) {
    //table rows
    for (a = 0; a <= multTable.rows[b].cells.length - 1; a++) {
      //row cells
      div.innerHTML = div.innerHTML + "" + multTable.rows[b].cells[c].innerHTML; //add data to div
    }
    div.innerHTML = div.innerHTML + "<br/>";
  }
  document.body.appendChild(div); //Add or append container to body

  /*var myVar = document.getElementById("multTable");
var arrValue = "";
for (i = 1; i <= 12; i++) {
  arrValue += i + " x " + [i] + " = " + i * [] + "\n";

  console.log(arrValue);
}*/
  var numbers2 = arrValue.map(myFunction);

  document.getElementById("product").innerHTML = numbers2;

  function myFunction(value, index, arrValue) {
    return value * 1;
  }
}
