$(window).load(function(){
  setTimeout(function(){
      $('#myModal').modal('show');
  }, 1000);
});


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
 
}

function openForm1() {
    document.getElementById("myForm1").style.display = "block";

}

function closeForm1() {
    document.getElementById("myForm1").style.display = "none";
   
}


function cost(){

  var x = document.forms["form2"]["email"].value;
  var y =  document.forms["form2"]["phone"].value;
  if (x == "" || y === "") {
    alert("please fill all the details");
    return false;
  }
  else if( y.length<10){
    alert("please give a valid phone number");
    event.preventDefault();
    return false;
  }
  else {
    event.preventDefault();
   a =  document.getElementById("em1").value;
   b =  document.getElementById("num1").value;
   var data = {
    "project_name": "Concorde Auriga",
    "client_name": "null",
    "client_mail_id": a,
    "client_phone_number": b,
    "client_message": "null"
   } 
   var downloadBro = JSON.stringify(data);
   $.ajax({
  url: "https://wmy59z5nb1.execute-api.us-east-1.amazonaws.com/prod/",
  data: downloadBro,
  cache: false,
  processData: false,
  contentType: false,
  type: 'POST',
  success: function (data) {
    event.preventDefault();
    closeForm1();
     $("#testimonial").css({"display":"block"});
     var elmnt = document.getElementById("testimonial");
     elmnt.scrollIntoView();
     
     }
   });
  }
}

function bro(){
  var x = document.forms["form1"]["email"].value;
  var y =  document.forms["form1"]["phone"].value;
  if (x == "" || y === "") {
    alert("please fill all the details");
    return false;
  }
  else if( y.length<10){
    alert("please give a valid phone number");
    event.preventDefault();
    return false;
  }
  else {
    event.preventDefault();
   a =  document.getElementById("em").value;
   b =  document.getElementById("num").value;
   var data = {
    "project_name": "Concorde Auriga",
    "client_name": "null",
    "client_mail_id": a,
    "client_phone_number": b,
    "client_message": "null"
   } 
   var downloadBro = JSON.stringify(data);
   $.ajax({
  url: "https://wmy59z5nb1.execute-api.us-east-1.amazonaws.com/prod/",
  data: downloadBro,
  cache: false,
  processData: false,
  contentType: false,
  type: 'POST',
  success: function (data) {
    event.preventDefault();
    closeForm();
     $("#testimonial").css({"display":"block"});
     var elmnt = document.getElementById("testimonial");
     elmnt.scrollIntoView();
     
     }
   });
  }
}


function bro1(){
  var z =  document.forms["form3"]["name"].value;
  var x = document.forms["form3"]["email"].value;
  var y =  document.forms["form3"]["phone"].value;
 
  if (z == "" || x == "" || y === "") {
    alert("please fill all the details");
    return false;
  }
  else if( y.length<10){
    alert("please give a valid phone number");
    event.preventDefault();
    return false;
  }
  else {
    event.preventDefault();
   a =  document.getElementById("em3").value;
   b =  document.getElementById("em4").value;
   c =  document.getElementById("num3").value;
   var data = {
    "project_name": "Concorde Auriga",
    "client_name": a,
    "client_mail_id": b,
    "client_phone_number": c,
    "client_message": "null"
   } 
   var downloadBro = JSON.stringify(data);
   $.ajax({
  url: "https://wmy59z5nb1.execute-api.us-east-1.amazonaws.com/prod/",
  data: downloadBro,
  cache: false,
  processData: false,
  contentType: false,
  type: 'POST',
  success: function (data) {
    event.preventDefault();
     
     document.getElementById("write_cotent").innerHTML= "<h4>Thanks you for contacting us, we will get in touch with you shortly</h4>";
    //  document.getElementById("myModal").style.display = "none";
     }
   });
  }
}


function bro3(){
  var z =  document.forms["form4"]["name"].value;
  var x = document.forms["form4"]["email"].value;
  var y =  document.forms["form4"]["phone"].value;
 
  if (z == "" || x == "" || y === "") {
    alert("please fill all the details");
    return false;
  }
  else if( y.length<10){
    alert("please give a valid phone number");
    event.preventDefault();
    return false;
  }
  else {
    event.preventDefault();
   a =  document.getElementById("em5").value;
   b =  document.getElementById("em6").value;
   c =  document.getElementById("num4").value;
   var data = {
    "project_name": "Concorde Auriga",
    "client_name": a,
    "client_mail_id": b,
    "client_phone_number": c,
    "client_message": "null"
   } 
   var downloadBro = JSON.stringify(data);
   $.ajax({
  url: "https://wmy59z5nb1.execute-api.us-east-1.amazonaws.com/prod/",
  data: downloadBro,
  cache: false,
  processData: false,
  contentType: false,
  type: 'POST',
  success: function (data) {
    event.preventDefault();
     
     document.getElementById("write_cotent1").innerHTML= "<h6>Thanks you for contacting us, we will get in touch with you shortly</h6>";
    //  document.getElementById("myModal").style.display = "none";
     }
   });
  }
}


function contactUs(){
  console.log("hi");
  var a = document.forms["form3"]["client_name"].value;
  var b =  document.forms["form3"]["client_mail_id"].value;
  var c =  document.forms["form3"]["client_phone_number"].value;
  var d =  document.forms["form3"]["client_message"].value;
  if (a == "" || b === "" || c === "" || d === "" ) {
    alert("please fill all the details");
    return false;
  }
  else if( c.length<10){
    alert("please give a valid phone number");
    event.preventDefault();
    return false;
  }
  else{
    event.preventDefault();
    e=document.getElementById("aa").value;
    console.log(e);
    f=document.getElementById("bb").value;
    g=document.getElementById("cc").value;
    h=document.getElementById("dd").value;
    var data = {
      "project_name": "Concorde Auriga",
      "client_name": e,
      "client_mail_id": f,
      "client_phone_number": g,
      "client_message": h
     } 
    
 var c = JSON.stringify(data);
 console.log(c);
 
 $.ajax({
  url: "https://wmy59z5nb1.execute-api.us-east-1.amazonaws.com/prod/",
  data: c,
  cache: false,
  processData: false,
  contentType: false,
  type: 'POST',
  success: function (data) {
    console.log(data);
    $("#kkl").css({"display":"none"});
    $("#contactUsForm").html("<h1 style=\"color:black\">Thank you for contacting us, We will get in touch with you Shortly.</h1>");
   
  }

});
  }
}


