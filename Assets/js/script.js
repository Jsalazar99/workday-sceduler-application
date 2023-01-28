// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  var time = dayjs();
  var headerDate = time.format("dddd, MMMM D");
  $("#currentDay").html(headerDate);


$(".time-block").each(function() {
  // console.log("hello!", this);
  var rowTime = parseInt($(this).attr("id").split("-")[1]);
  var timeNow = parseInt(dayjs().format("H"));
  console.log(typeof(timeNow));

  if (rowTime === timeNow) {
    $(this).addClass("present");
  }
  else if (rowTime > timeNow) {
    $(this).addClass("future");
  }
  else {
    $(this).addClass("past");
  }
});

$(".saveBtn").on("click", function() {
  console.log("this");
  var textInput = $(this).siblings("textarea").val();
  console.log(textInput);

  var rowHour = $(this).parent().attr("id");
  console.log(rowHour);

  localStorage.setItem(rowHour, textInput);
});



for (let i = 9; i <= 17; i++) {
  $(`#hour-${i} textarea`).val(localStorage.getItem(`hour-${i}`));
  
}

// PSUEDO CODE HERE 
/* 
GIVEN I am using a daily planner to create a schedule

WHEN I open the planner
THEN the current day is displayed at the top of the calendar

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

WHEN I click into a timeblock
THEN I can enter an event

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist
 */

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
