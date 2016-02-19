var tb = document.getElementById("name");

/*
This is an event listener that watches for key press events
on our text box.
*/
tb.addEventListener("keypress", function(event) {
    console.log('Pressed!');
});