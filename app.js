Sugar.extend()
var location1 = {location:"New York", temperature: "30°"}
  location2 = {location:"Los Angeles", temperature: "58°"}
  location3 = {location:"Cincinnati", temperature: "42°"}
var location1_display = document.getElementById("location1")
var degrees = Math.random() * 80 + 20
location1_display.textContent = location1.temperature


var location2_display = document.getElementById("location2")
var degrees = Math.random() * 80 + 20
location2_display.textContent = location2.temperature


var location3_display = document.getElementById("location3")
var degrees = Math.random() * 80 + 20
location3_display.textContent = location3.temperature

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



var Person = class{
  full_name(){
    return this.first_name + " " + this.last_name
  }

  years(){
    if (this.age > 21) {return (65 - this.age) + " years till retirement"}
    else {return (21 - this.age) + " years till drinking age"}
  }
  // marriage() {
  //   if (this.relation = married) {return (if this.gender = female) {{return (This female)} else (This male)} + " is married to " + this.married_to}
  // }
  //   else (return ((if this.gender = female) {{return (This female)} else (This male)} + " has a crush on " + this.crush_name)
  // }

  nameplate(){
    return this.full_name() + "(" + this.job_title + ")" + "-" + this.years() //+ this.marriage()
  }
}

var MrIliev = new Person()

MrIliev.first_name = "Milan"
MrIliev.last_name = "Iliev"
MrIliev.job_title = "Developer/Teacher"
MrIliev.age = 30
MrIliev.relation = "not married"
MrIliev.gender = "male"
MrIliev.crush_name = "Emily"


var Angela = new Person()

Angela.first_name = "Angela"
Angela.last_name = "Zheng"
Angela.job_title = "student"
Angela.age = 15
Angela.relation = "not married"
Angela.gender = "female"
Angela.crush_name = "nobody"

var Wendy = new Person()

Wendy.first_name = "Wendy"
Wendy.last_name = "Zheng"
Wendy.job_title = "Babysitter"
Wendy.age = 45
Wendy.relation = "married"
Wendy.gender = "female"
Wendy.crush_name = "Junjie Wang"

var Vicki = new Person()

Vicki.first_name = "Vicki"
Vicki.last_name = "Li"
Vicki.job_title = "Student"
Vicki.age = 15
Vicki.relation = "not married"
Vicki.gender = "female"
Vicki.crush_name = 'Coby'

alert(MrIliev.nameplate() + "\n" + Angela.nameplate() + "\n" + Wendy.nameplate() + "\n" )//Henry.nameplate())



var show = function(n) {alert(n)}
var list = [1, 3, 4, 10]
list.forEach(show)
alert(list.map(function(n){
  return n-2.
}))
