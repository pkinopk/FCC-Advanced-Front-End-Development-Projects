$(document).ready(function () {

  var canAC = true;
  var canDOT = true;
  //Setting the number buttons

  $("#0").on("click", function () {
    if ($("#value").text() == "0") {
      $("#value").text(0);
    } else {
      $("#value").append(0);
    }
    canAC = true;
  });

  $("#1").on("click", function () {
    if ($("#value").text() == "0") {
      $("#value").text(1);
    } else {
      $("#value").append(1);
    }
    canAC = true;
  });

  $("#2").on("click", function () {
    if ($("#value").text() == "0") {
      $("#value").text(2);
    } else {
      $("#value").append(2);
    }
    canAC = true;
  });

  $("#3").on("click", function () {
    if ($("#value").text() == "0") {
      $("#value").text(3);
    } else {
      $("#value").append(3);
    }
    canAC = true;
  });

  $("#4").on("click", function () {
    if ($("#value").text() == "0") {
      $("#value").text(4);
    } else {
      $("#value").append(4);
    }
    canAC = true;
  });

  $("#5").on("click", function () {
    if ($("#value").text() == "0") {
      $("#value").text(5);
    } else {
      $("#value").append(5);
    }
    canAC = true;
  });

  $("#6").on("click", function () {
    if ($("#value").text() == "0") {
      $("#value").text(6);
    } else {
      $("#value").append(6);
    }
    canAC = true;
  });

  $("#7").on("click", function () {
    if ($("#value").text() == "0") {
      $("#value").text(7);
    } else {
      $("#value").append(7);
    }
    canAC = true;
  });

  $("#8").on("click", function () {
    if ($("#value").text() == "0") {
      $("#value").text(8);
    } else {
      $("#value").append(8);
    }
    canAC = true;
  });

  $("#9").on("click", function () {
    if ($("#value").text() == "0") {
      $("#value").text(9);
    } else {
      $("#value").append(9);
    }
    canAC = true;
  });

  $("#ce").on("click", function () {
    $("#value").text(0);
    $("#history").text("");
    canAC = true;
    canDOT = true;
  });

  $("#ac").on("click", function () {
    if (canAC) {
      if (($("#value").text().slice(0, -1)) == "") {
        $("#value").text(0);
      } else {
        $("#value").text($("#value").text().slice(0, -1));
      }
    } else {
      $("#value").text(0);
    }
  });

  $("#dot").on("click", function () {
    var value = $("#value").text();
    var lastChar = value.substr(-1);

    if (canDOT) {
      switch (lastChar) {
        case "+":
          $("#value").append("0.");
          break;

        case "-":
          $("#value").append("0.");
          break;

        case "*":
          $("#value").append("0.");
          break;

        case "/":
          $("#value").append("0.");
          break;

          case "0":
          $("#value").append(".");
          break;

        default:
          $("#value").append(".");
          break;
      }
    } 
    // else {
    //   $("#value").text("0.");
    // }
    canDOT = false;
  });

  $("#addition").on("click", function () {
    $("#value").append("+");
    canAC = true;
    canDOT = true;
  });

  $("#subtraction").on("click", function () {
    $("#value").append("-");
    canAC = true;
    canDOT = true;
  });

  $("#multiplication").on("click", function () {
    $("#value").append("*");
    canAC = true;
    canDOT = true;
  });

  $("#division").on("click", function () {
    $("#value").append("/");
    canAC = true;
    canDOT = true;
  });

  $("#result").on("click", function () {
    var result = eval($("#value").text());
    $("#history").text($("#value").text());
    $("#value").text(result);
    canAC = false;
    canDOT = false;
  });

});