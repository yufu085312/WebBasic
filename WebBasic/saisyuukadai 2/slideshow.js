$(function() {
  var imageArea = $("#imageArea");
  for(var i=1; i<=100; i++) {
    imageArea.append("<img src='images/ことわざ" + i + ".png'>");
  }

  $("#next").on("click", function() {
    if(parseInt(imageArea.css("left")) > -49500) {
      toDisabled();
      imageArea.animate({ "left" : "-=500px" }, "fast", "linear", toEnabled);
    }
  });

  $("#prev").on("click", function() {
    if(parseInt(imageArea.css("left")) < 0) {
      toDisabled();
      imageArea.animate({ "left" : "+=500px" }, "fast", "linear", toEnabled);
    }
  });
});

function toDisabled() {
  $("#prev, #next").attr("disabled", "disabled");
}
function toEnabled() {
  $("#prev, #next").removeAttr("disabled");
}