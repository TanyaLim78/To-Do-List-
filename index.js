var nameinput=$('.nameinput');
var listinput=$('.listinput').val();
var button1=$('.button1');
var nameinput=$('.nameinput').val();
var section1=$('.section1');
var button2=$('.button2');
var name=$('h1');
button2.on("click", printitem);
function printitem(){
 event.preventDefault();
 var listinput=$('.listinput').val();
section1.append(`<p>-${listinput}</p>`);
var listinput= $('.listinput').val("");
}
button1.on("click", printname);
function printname(){
event.preventDefault();
var nameinput=$('.nameinput').val();
var name=$('h1');
name.text(`${nameinput}'s To Do List`);
}
