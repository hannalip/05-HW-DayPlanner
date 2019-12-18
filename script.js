//stored time and value get localstorage
myStoredStuff();

function myStoredStuff() {
    var hour9 = localStorage.getItem("hour-9");
    $("#hour-9").find("textarea").text(hour9)
    var hour10 = localStorage.getItem("hour-10");
    $("#hour-10").find("textarea").text(hour10)
    var hour11 = localStorage.getItem("hour-11");
    $("#hour-11").find("textarea").text(hour11)
    var hour12 = localStorage.getItem("hour-12");
    $("#hour-12").find("textarea").text(hour12)
    var hour1 = localStorage.getItem("hour-1");
    $("#hour-1").find("textarea").text(hour1)
    var hour2 = localStorage.getItem("hour-2");
    $("#hour-2").find("textarea").text(hour2)
    var hour3 = localStorage.getItem("hour-3");
    $("#hour-3").find("textarea").text(hour3)
    var hour4 = localStorage.getItem("hour-4");
    $("#hour-4").find("textarea").text(hour4)
    var hour5 = localStorage.getItem("hour-5");
    $("#hour-5").find("textarea").text(hour5)
}

// save button 
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
// Set local storage
        localStorage.setItem(time, value);
    });
// moments time
    // $("#currentDay").text(moment().format('LLLL'));
});


// TIME

    //current date and time
    var now = moment();
    var currentDate = now.format("dddd, MMMM Do");
    var currentHour = now.get('hour')


    // put current date/time in sub title
    $("#currentDay").text(currentDate);

    // Change style base on time
$(".time-block").each(timeColor);
function timeColor(){
    console.log(currentHour, $(this).data("time"));
    if ($(this).data("time") > currentHour) {
            $(this).addClass("future");
        }
    else if ($(this).data("time") === currentHour) {
            $(this).addClass("present");
        }
    else ($(this).data("time") < currentHour); {
            $(this).addClass("past");
        }   
};


    timeColor();

