
var images = new Array();
images = document.querySelectorAll(".img");
var baseurl = "https://dummyapi.io/data/api/user";
var apiid = "601a6874e6cb4e4b8c44233d";
var name = document.querySelectorAll(".name");
var liuser = document.querySelectorAll('.message-promo');
var username = document.getElementsByClassName("name");
var message = document.querySelector("#meassagesend");
var outgoing = document.querySelectorAll(".outgoing");
var usernames =  document.querySelectorAll("#username")
var ul = document.getElementById("userOL");
var li = ul.getElementsByTagName('li');
var details = document.querySelector('#details');
var modal =  document.querySelector('#modaliphone');
var modalimg = document.querySelector("#modalimg");
var modalname = document.querySelector("#modalusername")




outgoing[outgoing.length-1].innerHTML+=`
     
<div class="wrapper">
<div class="bubble">
  <div class="bubble__circle"></div>
  <div class="bubble__circle"></div>
  <div class="bubble__circle"></div>
</div>
</div>
     
     `;

var users = new Array();
var description = new Array();

fetch('https://jsonplaceholder.typicode.com/posts/')
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  description = data;
})
.catch((error) => {
  
});






fetch(baseurl, {
  method: 'GET', // or 'PUT'
  headers: {
    'app-id': apiid,
  },

})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  users = data.data;
  modalname.innerHTML = document.querySelector(".open").querySelector('#username').innerText;
  modalimg.setAttribute('src',document.querySelector(".open").querySelector('img').src);
  userInfoPopulate();
    
})
.catch((error) => {
 
});



for (var i=0;i<liuser.length;i++){
    liuser[i].addEventListener("click", clickonchatwindows);
}
document.querySelector('#messages').addEventListener('click',()=>{
  if(modal.style.visibility === "visible"){

    modal.style.visibility = "hidden";
  }
})

function clickonchatwindows(e){
   
    var ol = e.srcElement.offsetParent.parentNode;

    if(modal.style.visibility === "visible"){

      modal.style.visibility = "hidden";
    }
   modalname.innerHTML = e.srcElement.offsetParent.querySelector("#username").innerText;
    modalimg.setAttribute('src',e.srcElement.offsetParent.querySelector("img").src)
   
    for (var i=0;i<ol.childNodes.length;i++){
        try{
        if(ol.childNodes[i] && ol.childNodes[i].attributes && ol.childNodes[i].attributes[0].value && (ol.childNodes[i].attributes[0].value == "open" ||ol.childNodes[i].attributes[0].value == "unread open"))
        ol.childNodes[i].className = '';
         document.querySelector("#activename").innerHTML = e.srcElement.offsetParent.querySelector("#username").innerText;
        }catch(e){

            console.log(e)
        }
    }
   
    
    e.target.offsetParent.classList.add("open");
    username[username.length-1].innerHTML = e.srcElement.parentElement.childNodes[3].innerText;
}


function randomNumber(min, max) {  
    var num = Math.random() * (max - min) + min; 
    var real = num.toFixed(0);
    return real;
}  


function userInfoPopulate(){
 
    for(var i =0; i<= images.length;i++){
          images[i].childNodes[1].setAttribute('src',users[randomNumber(1, users.length)].picture)
          username[i].innerText = users[randomNumber(1, users.length)].firstName +" "+ users[randomNumber(1, users.length)].lastName;
          document.querySelector("#activename").innerHTML = document.querySelector(".open .message-promo #username").innerText;
        }
         
}

function gotoBottom(id){
    var element = document.getElementById(id);
    element.scrollTop = element.scrollHeight - element.clientHeight;
 }

 message.addEventListener('click',()=>{
    gotoBottom("messages")
 })
 message.addEventListener('keyup',()=>{
     console.log(message.value)
     if(message.value.length > 0 ){


 document.querySelector(".wrapper").style.display ="block";
        
        
     
         
     gotoBottom("messages");
     var childlngth = outgoing[outgoing.length-1].childNodes.length;
     }else if(message.value.length == 0){
         try{

            document.querySelector(".wrapper").style.display ="none";
         }catch(e){}
     }
 })
 
 function myFunction() {
    // Declare variables
    var input, filter, a, i, txtValue = "";
    input = document.getElementById('searchuser');
    filter = input.value.toUpperCase();
    
 
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].querySelectorAll('p') ;
      
      for(var k =0; k< a.length; k++){
        if(k==1){
          txtValue += " ";
        }
        
        txtValue +=  a[k].innerText;
      }
      
         
      
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
    
  }
  details.addEventListener('click',(e)=>{

var top = e.srcElement.offsetTop +  e.srcElement.offsetHeight + 80;

var left = e.srcElement.offsetLeft - 100;

if(modal.style.visibility === "hidden"){
modal.style.top = top +"px";

modal.style.left = left +"px";
modal.style.visibility = "visible";
}else{
  modal.style.visibility = "hidden";
}

  })

var allli = ul.querySelectorAll('.img');

allli.forEach(item => {
  item.addEventListener('click', event => {

    //handle click

    for (var i=0;i<ul.childNodes.length;i++){
      try{
      if(ul.childNodes[i] && ul.childNodes[i].attributes && ul.childNodes[i].attributes[0].value && (ul.childNodes[i].attributes[0].value == "open" ||ul.childNodes[i].attributes[0].value == "unread open"))
      ul.childNodes[i].className = '';
       
      }catch(e){

          console.log(e)
      }
  }

    
    if(event.srcElement.attributes.hasOwnProperty("class")){

      
      event.srcElement.offsetParent.classList.add("open");
      document.querySelector("#activename").innerHTML =event.srcElement.offsetParent.querySelector("#username").innerText;
      modalname.innerHTML = event.srcElement.offsetParent.querySelector("#username").innerText;
    modalimg.setAttribute('src',event.srcElement.offsetParent.querySelector("img").src);
    }else{
      
 
       event.srcElement.offsetParent.offsetParent.classList.add("open");
       document.querySelector("#activename").innerHTML =event.srcElement.offsetParent.offsetParent.querySelector("#username").innerText;
       modalname.innerHTML = event.srcElement.offsetParent.offsetParent.querySelector("#username").innerText;
    modalimg.setAttribute('src',event.srcElement.offsetParent.offsetParent.querySelector("img").src);
    }
    
    
    if(modal.style.visibility === "visible"){

      modal.style.visibility = "hidden";
    }

    
  })
})

  
 
  
 
  