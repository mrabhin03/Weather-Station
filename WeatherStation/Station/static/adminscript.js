const body = document.querySelector("body"),
  modeToggle = body.querySelector(".mode-toggle");
didval = 1;
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
}
else{
  body.classList.remove("dark");
}

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

perdevice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var themovesobject=[]
function swipedevice(nav, obj) {
  date = document.getElementById("thedateinput").value;
  themovesobject[0] = document.getElementById("device_name");
  themovesobject[1] = document.getElementById("TableBody");
  themovesobject[2] = document.getElementById("minvalue");
  themovesobject[3] = document.getElementById("maxvalue");
  arrowdata = obj.querySelector("#swipearrow");
  if (nav == 0) {
    if (didval == 1) {
      arrowdata.classList.add("invalidmove");
    } else {
      arrowdata.classList.add("validmoveL");
      for (i in themovesobject){themovesobject[i].classList.add("textleftout");}
      setTimeout(() => {
        for (i in themovesobject){themovesobject[i].classList.remove("textleftout");}
        for (i in themovesobject){themovesobject[i].classList.add("textleftin");}
      }, 200);
      didval--;
    }
  } else {
    if (didval == perdevice.length-1) {
      arrowdata.classList.add("invalidmove");
    } else {
      arrowdata.classList.add("validmoveR");
      for (i in themovesobject){themovesobject[i].classList.add("textrigthout");}
      setTimeout(() => {
        for (i in themovesobject){themovesobject[i].classList.remove("textrigthout");}
        for (i in themovesobject){themovesobject[i].classList.add("textrigthin");}
      }, 200);
      didval++;
    }
  }
  devicesdataout(perdevice[didval], date);
  setTimeout(() => {
    if (arrowdata.classList.contains("validmoveL")) {
      arrowdata.classList.remove("validmoveL");
    }
    if (arrowdata.classList.contains("validmoveR")) {
      arrowdata.classList.remove("validmoveR");
    }
    if (arrowdata.classList.contains("invalidmove")) {
      arrowdata.classList.remove("invalidmove");
    }
    if (themovesobject[0].classList.contains("textleftin")) {
        for (i in themovesobject){themovesobject[i].classList.remove("textleftin");}
    }
    if (themovesobject[0].classList.contains("textrigthin")) {
        for (i in themovesobject){themovesobject[i].classList.remove("textrigthin");}
      }
  }, 500);
}


function statuschange(elemant,id){
  sub_elemant = elemant.querySelector("#changebutton");
  var count = document.querySelectorAll('#changebutton').length;
  if(elemant.classList.contains("on"))
  {elemant.classList.remove("on");sub_elemant.classList.remove("on");statusto=0;}
  else{elemant.classList.add("on");sub_elemant.classList.add("on");statusto=1;}
  updatestatusback(id,statusto)
  var avcount = document.querySelectorAll('.on').length/2;
  $("#actives").text(avcount);
  $("#inactives").text(count-avcount);
}

function updatestatusback(val,statusto) {
  $.ajax({
      url: '/statuschange/',
      method: 'GET',
      data: { 'id': val,'status':statusto}, 
      dataType: 'json',
      success: function (data) {
      },
      error: function (error) {
          console.error('Error fetching new date:', error);
      },
  });
}