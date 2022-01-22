// global variable for moment, to have the time displayed at the top of the page
var currentDay = moment().format('dddd, MMMM Do YYYY');
$('#currentDay').html(currentDay);   

 // Button function to clear local storage and clear contents
 $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

  //grabs hour from each time slot and compares it to actual time
  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  //grabs values from time and value divs and saves them to local storage
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  //retrieves items from local storage and sets them in proper places
  $("#hour9am.time-block").val(localStorage.getItem("hour9am"));
  $("#hour10am.time-block").val(localStorage.getItem("hour10am"));
  $("#hour11am.time-block").val(localStorage.getItem("hour11am"));
  $("#hour12pm.time-block").val(localStorage.getItem("hour12pm"));
  $("#hour1pm.time-block").val(localStorage.getItem("hour1pm"));
  $("#hour2pm.time-block").val(localStorage.getItem("hour2pm"));
  $("#hour3pm.time-block").val(localStorage.getItem("hour3pm"));
  $("#hour4pm.time-block").val(localStorage.getItem("hour4pm"));
  $("#hour5pm.time-block").val(localStorage.getItem("hour5pm"));

