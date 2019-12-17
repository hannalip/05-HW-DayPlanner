
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
    $("#currentDay").text(moment().format('LLLL'));
});
// var dayPlanner = [
//     {
//       id: 1,
//       time: "9AM",
//       value: "wake up"
//     },
//     {
//       id: 2,
//       time: "10AM",
//       thing: "work"
//     }
//   ];





    // if (time && value === null) {
    //   return;
    // }


//   localStorage.setItem("dayPlanner", JSON.stringify(dayPlanner));
//   var myStuff = JSON.parse(localStorage.getItem("dayPlanner"));
//   for (var i = 0; i < myStuff.length; i++) {
//     console.log(myStuff[i].time);
//     console.log(myStuff[i].thing);
//   }
// vaulesArray.push()


// const data = JSON.parse(localStorage.getItem(time, value))

// localStorage.setItem(time, value);



// getValues();

// function getValues() {
//     var storedValues = JSON.parse(localStorage.getItem(values));

//     if (storedValues !== null) {
//         vaulesArray = storedValues;
//     }

// };
// get local storage
// var timeStorage = localStorage.getItem(time);
// var valueStorage = localStorage.getItem(value);

// deletes local storage
// localStorage.removeItem(time);

// var obj = {
//     time: $(this).parent().attr("id"),
//     value = $(this).siblings(".description").val();

// };

// var stringObj = JSON.stringify(obj)

// localStorage.setItem("obj", stringObj);

// var objFromLocalStorage = localStorage.getItem("obj");

// var  toObj = JSON.parse(objFromLocalStorage)


// TIME
// function showcurrenttime()
// {
//    var currentTime = $('#currentDay').text(moment().format('LLLL'));

//     {
//         if ( < moment().format('LLLL'))
//         {
//             $(".description").addClass('dngr');
//         };
//         // if ($(this).data('#currentDay') > moment().format('LLLL') && $(this).data('#currentDay') < moment().add('h',1).format('LLLL'))
//         // {
//         //     $(this).parent().addClass('ready');
//         // };
//     };
//     // repeater = setTimeout(showcurrenttime, 500);
// }
// showcurrenttime();

