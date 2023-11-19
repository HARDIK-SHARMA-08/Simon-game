// Manipualating Styles using Jquery

// document.querySelector("h1").style.color="Red";
// document.querySelectorAll("h1").style.color="Red";

// Above set of code using JQuery
// $("h1").css("color", "red");

// How to select multiple CSS in Jquery
// $("h1").addClass("header header-2");
// $("h1").removeClass("header header-2");
// $("h1").hasClass("header header-2"); // returns TRUE in case the class is applied and FALSE in case the class is not applied

// Manipulating Text Using JQuery

// document.querySelector("h1").TextContent="Red";
// document.querySelectorAll("h1").sinnerHTMLr="<em>Red</em>";

// Above set of code using JQuery
// $("h1").text("Bye");
// $("h1").html("<em>Bye</em>");

// Manipulating Attribute Using JQuery

// document.querySelector("a").setAttribute("href", "http://www.yahoo.com");

// Above set of code using JQuery
// $("a").attr("href", "http://www.facebook.com");

// Adding Event listeners Using JQuery

//Adding Event Listener to all the button

// for(var i =0; i< 4 ; i++){
// document.querySelectorAll(".hello")[i].addEventListener("click", function () {
//   document.querySelector("h1").style.color = "Purple";
// });
// }

// Above set of code using JQuery (WITHOUT USING FOR LOOP)
// $(".hello").click(function () {
//     $("h1").css("color", "Red");
// });


// Changing the Text content of h1 to any Keypress in document
$(document).keypress(function (event) {
    $("h1").text(event.key);
});