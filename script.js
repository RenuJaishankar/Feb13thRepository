let myEl=document.getElementById("myel")
myEl.innerHTML ="this text is rendered in javascript"
myEl.style.color = "blue"
let myTag = document.getElementsByTagName("h1")
//This return an HTML collection ,with no higher order functions
let myClass = document.getElementsByClassName("myclass")
//myClass.color = "magenta"
//myClass.innerHTML = "Hi,this is my class."
//myClass.color = "red"
let query = document.querySelector('#header')
//This returns a node list with a higher order function of forEach
let otherQ=document.querySelectorAll('.myclass')
console.log(myClass)
//console.log(otherQ)
//otherQ.innerHTML = "this works"  //selects the first element in the query
otherQ.forEach(el => el.innerHTML="this works") 

//you can explicitly set a node's attributes as well.
let elt=document.getElementById("otherel")
elt.setAttribute("style","color:orange,border:1 px solid black")

elt.style.color="magenta"
//Objects that I will store in memory
let user = {
    name:"Shane"

}
let doggie = {
    name:"Rover"
}

let flower = {
    name:"Tulip"
}
//Stringify these objects
let storeUser = JSON.stringify(user)
let storedog = JSON.stringify(doggie)
let storeflower = JSON.stringify(flower)
localStorage.setItem('userInfo',storeUser)
localStorage.setItem('my dog',storedog)
localStorage.setItem('FlowerName',storeflower)
console.log(localStorage.getItem('userInfo'))
const handleScroll = () => {
    window.scroll(0,0)
    console.log("scrolling up")
}

const handleStorage = () => {
    console.log(localStorage.getItem('my dog'))
    
}

const getFlowerStorage = () => {
    console.log(localStorage.getItem('FlowerName'))
}

//HTML methods for DOM traversing
let items = document.querySelector('ul').children
//function to check how many items are in the list
const handleList=()=>{
console.log(items.length)

}

const handleRemove=()=>{
    document.querySelector('.remove').remove()
}

elt.addEventListener('click',(event) => console.log("clicked"))
window.addEventListener('keypress',(event) => console.log(' key pressed'))