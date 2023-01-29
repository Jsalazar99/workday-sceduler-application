// starting code after page loads 
 $(document).ready(function () {

  // code block for dayJS time widget 
  var time = dayjs();
  var headerDate = time.format("dddd, MMMM DD, YYYY");
  $("#currentDay").html(headerDate);

 
  // function for formatting input 
  $(".time-block").each(function () {
    // console.log("hello!", this);
    var rowTime = parseInt($(this).attr("id").split("-")[1]);
    var timeNow = parseInt(dayjs().format("H"));
    // console.log(typeof(timeNow));

    // conditional to change rows based on current time
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

  // event listener to save to local storage 
  $(".saveBtn").on("click", function () {
    console.log("this");
    var textInput = $(this).siblings("textarea").val();
    console.log(textInput);

    var rowHour = $(this).parent().attr("id");
    console.log(rowHour);

    localStorage.setItem(rowHour, textInput);
  });

  // for loop to filter through rows by busines hours
  for (let i = 9; i <= 17; i++) {
    $(`#hour-${i} textarea`).val(localStorage.getItem(`hour-${i}`));
  }
  
});
