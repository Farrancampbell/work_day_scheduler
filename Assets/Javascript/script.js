var datetime = null,
        today = null;
var update = function () {
    today = moment(new Date())
    $("#currentDay").text(today.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);


var hrs = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentHour = today.hours();
for (var i = 0; i < hrs.length; i++) {
  if (currentHour === hrs[i]) {
    $("#" + hrs[i]).addClass("present");
  } else if (currentHour > hrs[i]) {
    $("#" + hrs[i]).addClass("past");
  } else {
    $("#" + hrs[i]).addClass("future");
  }
}
$(".saveBtn").on("click", function () {
  var hr = $(this).data("hr");
  var description = $("#" + hr).val();
  localStorage.setItem(hr, description);
});
for (var i = 0; i < hrs.length; i++) { 
  $("#" + hrs[i]).val(localStorage.getItem(hrs[i])); 
}
 

});