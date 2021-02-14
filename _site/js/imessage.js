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




// outgoing[outgoing.length-1].innerHTML+=`
     
// <div class="wrapper">
// <div class="bubble">
//   <div class="bubble__circle"></div>
//   <div class="bubble__circle"></div>
//   <div class="bubble__circle"></div>
// </div>
// </div>
     
//      `;


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

  
 
  
 
  