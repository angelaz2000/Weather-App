// var request = new XMLHttpRequest()
// request.open("GET", "http://api.wunderground.com/api/4c0222348c7b3182/conditions/q/NY/NewYork.json")
// request.send()
// request.addEventListener("load", function(){
//   var response = JSON.parse(request.responseText)
// console.log(response.current_observation.temp_f)
// })

// var temperature = class{temperature(){return.this.temp_f}
//   }

var location1_display = document.getElementById("location1")
var request1 = new XMLHttpRequest()
request1.open("GET", "http://api.wunderground.com/api/4c0222348c7b3182/conditions/q/NY/New_York.json")
request1.send()
request1.addEventListener("load", function(){
  var response = JSON.parse(request1.responseText)
  location1_display.textContent = response.current_observation.temp_f
  var location1_icon1 = document.getElementById("icon1")
  location1_icon1.setAttribute("src", response.current_observation.icon_url)
})

var location2_display = document.getElementById("location2")
var request2 = new XMLHttpRequest()
request2.open("GET", "http://api.wunderground.com/api/4c0222348c7b3182/conditions/q/CA/Los_Angeles.json")
request2.send()
request2.addEventListener("load", function(){
  var response = JSON.parse(request2.responseText)
  location2_display.textContent = response.current_observation.temp_f
  var location2_icon2 = document.getElementById("icon2")
  location2_icon2.setAttribute("src", response.current_observation.icon_url)
})

var location3_display = document.getElementById("location3")
var request3 = new XMLHttpRequest()
request3.open("GET", "http://api.wunderground.com/api/4c0222348c7b3182/conditions/q/Oh/Cincinnati.json")
request3.send()
request3.addEventListener("load", function(){
  var response = JSON.parse(request3.responseText)
  location3_display.textContent = response.current_observation.temp_f
  var location3_icon3 = document.getElementById("icon3")
  location3_icon3.setAttribute("src", response.current_observation.icon_url)
})
