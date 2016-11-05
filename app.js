Sugar.extend()
var day1_display = document.getElementById("day1")
var degrees = Math.random() * 80 + 20
day1_display.textContent =  Math.round(degrees).toString() + "°"

var day2_display = document.getElementById("day2")
var degrees = Math.random() * 80 + 20
day2_display.textContent =  Math.round(degrees).toString() + "°"


var day3_display = document.getElementById("day3")
var degrees = Math.random() * 80 + 20
day3_display.textContent =  Math.round(degrees).toString() + "°"

var now = new Date
date.textContent = now.format ('{year}/{MM}/{dd} {Weekday}')

var button = document.getElementById ("hi_everyone")
var message = document.getElementById ("message")
message.textContent = ("Program Started!")
var hi_everyone = function(){
  message.textContent = "Hiiii Everyyyonnee!!!"
}
button.addEventListener("click", function(){
  alert("Hi Everyone!")
})
