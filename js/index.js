var MT = 200;
//تحديد مكان الضغط و //eتتحقق من العنصر المضغوط
document.addEventListener("click", function (e) {
  if (e.target.name == "lavel") {
    //لمعرفة مكان الضغط
    e.target.value == "Eusy"
      ? (MT = 200)
      : e.target.value == "Normal"
      ? (MT = 150)
      : e.target.value == "Hard"
      ? (MT = 50)
      : "";
  }
});
function Time() {
  //على جال الوقت
  document.getElementById("message").innerText = " ";

  var t = 0;
  var maxTime = MT;

  function Timeout() {
    /*لون الوقت الابتدائي */
    $(document).ready(function () {
      $("#time").css({ color: "black" });
    });
    /*الزمن */
    t++;
    /*تحديد وقت البداية */
    let time = new Date(t);
    /*استدعاء الوقع بلثواني ووضع في الديف  تايم */
    document.getElementById("time").innerText = time.getTime() + "s";
    /*الحالة التي ينتهي فيها الوقت */
    if (t == maxTime) {
      document.getElementById("time").innerText = "Time Over";
      /*في الحالة الخسارة */
      document.getElementById("message").innerText = "Game Over";

      $(document).ready(function () {
        $(".alert").css({ display: "inline-block" });
        $(".overlay").css({ display: "inline-block" });
        var audio = document.getElementById("gameOver");
        audio.play();
      });
    }

    /*الحالة التي يتوقف فيها الوقت */
    if (
      t == maxTime ||
      document.getElementById("message").innerText == "You Win"
    ) {
      /*دالة توقيف الوقت  */
      clearInterval(intr);
    }
    /*تغيير لون الوقت الى الاحمرعندما تبقى 16 من الوقت */
    if (t > maxTime - 16) {
      /* عندما تصل ال 16 ثانية الاخيرة يبدا الصوت العداد*/

      var audio = document.getElementById("Timeleft");

      audio.play();
      $(document).ready(function () {
        $("#time").css({ color: "red" });
      });
    }
  }
  /*دالة تكرردالة تايم اوت كل 1ثانية */
  let intr = setInterval(Timeout, 1000);
}

function play() {
  Time(MT);
  /*الحالة الابتدائية لصندوق */
  var Box_Taquin = new Array("1", "2", "3", "4", "5", "6", "7", "8", "X");

  // هذا الصندوق الجديد الذي سنعدل عليه
  var Box_Taquin1 = new Array();
  // ملى الصندوق بنفس القيم الصندوق الاول
  for (var i = 0; i < Box_Taquin.length; i++) {
    Box_Taquin1[i] = Box_Taquin[i];
  }

  for (var i = 0; i < Box_Taquin.length; i++) {
    var x = Math.random();
    var index = Math.floor(x * Box_Taquin1.length);
    //يحفض الرقم عشوائي من البوكس 1
    document.getElementById("b" + i).innerText = Box_Taquin1[index];
    //يحذف القيمة المحفوضة في الجدول حسب موقها لتفادي التكرار
    Box_Taquin1.splice(index, 1);
  }
}

function move(id) {
  // صندوق الفوز
  var Box_winer = new Array(["1", "2", "3"], ["4", "5", "6"], ["7", "8", "X"]);
  // قيم البوكس الجديد لحفض القيم الموجدة حاليا
  var BoxNow = new Array([], [], []);
  var index = 0;
  //جلب قيمة النص من البوتون  المضغوط عن طريق ال الايدي
  var value = document.getElementById(id).innerText;
  //بوكل حفض القيم الجديد
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      //حفض القيم الجديد في كل ضغطة
      BoxNow[i][j] = document.getElementById("b" + index).innerText;

      if (BoxNow[i][j] == "X") {
        //حفض ايدي العنصر اكس
        var IdX = "b" + index;
        //حفض موقع اكس
        var ix = i;
        var jx = j;
      }

      index++;
    }
  }

  //هنا يحصل التبديل
  //اذا كان موقع الاكس من السطر الثاني او الاول
  if (ix < 2) {
    //اذا كان قيمة البوتون المضغوط هي القيمة لي تحت الاكس
    if (value == BoxNow[ix + 1][jx]) {
      // صوت التحريك
      document.getElementById("move").play();
      //يتم التبديل
      //القيمة المضغوطة ب اكس
      document.getElementById(id).innerText = "X";
      // قيمة الاكس بالقيمة المضغوطة
      document.getElementById(IdX).innerText = value;
    }
  }
  //اذا كان موقع الاكس في العمود الثاني او الاول
  if (jx < 2) {
    //اذا كان قيمة البوتون المضغوط هي القيمة التي على يمين الاكس
    if (value == BoxNow[ix][jx + 1]) {
      // صوت التحريك
      document.getElementById("move").play();
      //يتم التبديل
      //القيمة المضغوطة ب اكس
      document.getElementById(id).innerText = "X";
      // قيمة الاكس بالقيمة المضغوطة
      document.getElementById(IdX).innerText = value;
    }
  }
  //اذاكان موقع الاكس في السطر الثالث او الثاني
  if (ix > 0) {
    //اذا كان قيمة البوتون المضغوط هي القيمة لي فوق الاكس

    if (value == BoxNow[ix - 1][jx]) {
      // صوت التحريك
      document.getElementById("move").play();
      //يتم التبديل
      //القيمة المضغوطة ب اكس
      document.getElementById(id).innerText = "X";
      // قيمة الاكس بالقيمة المضغوطة
      document.getElementById(IdX).innerText = value;
    }
  }
  //اذا موقع الاكس في العمود الثالث او الثاني
  if (jx > 0) {
    //اذا كان قيمة البوتون المضغوط هي اليسار

    if (value == BoxNow[ix][jx - 1]) {
      // صوت التحريك
      document.getElementById("move").play();

      //يتم التبديل
      //القيمة المضغوطة ب اكس
      document.getElementById(id).innerText = "X";
      // قيمة الاكس بالقيمة المضغوطة
      document.getElementById(IdX).innerText = value;
    }
  }

  //تحديث البوكس
  //لاننا غيرنا قيم البوكس بالتبديل
  index = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      BoxNow[i][j] = document.getElementById("b" + index).innerText;
      index++;
    }
  }

  /*التحقق من الفوز */
  var indexTrue = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      //يحسب عدد القيم الصحيحة
      if (BoxNow[i][j] == Box_winer[i][j]) {
        indexTrue++;
      }
    }
  }
  /*  في حالة الفوز */
  if (indexTrue == 9) {
    document.getElementById("message").innerText = "You Win";

    $(document).ready(function () {
      $(".alert").css({ display: "inline-block" });
      $(".overlay ").css({ display: "inline-block" });
      var audio = document.getElementById("winer");
      audio.play();
    });
  }
}

// اختفاء الرسالة العب مجدد

$("#btn1").click(function () {
  $(".alert").css({ display: "none" });
  $(".overlay").css({ display: "none" });
});

//اختفاء بوتون ابداء اللعبة

$(document).ready(function () {
  $("#btn").click(function () {
    $(".interface").css({ display: "none" });
    $(".overlay").css({ display: "none" });
  });
});
