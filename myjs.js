var x;
var tempr;
function getLocation(){
  x = document.getElementById("weather");
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition,showError);
  }
  else{
   x.innerHTML="Geolocation is not supported by this browser."; 
  } 
}

function showPosition(position){
  //x.innerHTML = "Latitude: " + position.coords.latitude + 
  //  "<br>Longitude: " + position.coords.longitude;
  console.log("1dsa");
  var latitude=position.coords.latitude;
  var longitude=position.coords.longitude;
  console.log("1");
  console.log(position.coords.latitude);
  var url= "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude;
  loadDoc(url);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

function loadDoc(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      var details=JSON.parse(this.responseText);
      
      console.log(details.main.temp);
      document.getElementById("weather").innerHTML = details.weather[0].main;
      document.getElementById("details").innerHTML = details.weather[0].description;
      tempr=details.main.temp;
      document.getElementById("temp").innerHTML = tempr+"C";
    
      //For showing the button
      var button1=document.getElementById("b1");
      button1.style.display = "block";
      $(".l1").show();
      $(".l2").show();
      $(".l3").show();
      var weather=(details.weather[0].main).toLowerCase();
      
      
      //console.log("Weather",weather);
     
     //For different weather --> change background image
     if((weather).includes("cloud"))
       $('body').css("backgroundImage",'url("http://www.weatherwizkids.com/wp-content/uploads/2015/02/fractus-clouds.jpg")');
      
      if((weather).includes("rain"))
        $('body').css("backgroundImage",'url(https://wearechange.org/wp-content/uploads/2015/03/1_See_It.jpg)');
      
      if((weather).includes("sun"))
        $('body').css("backgroundImage",'url(http://portugalresident.com/sites/default/files/styles/node-detail/public/field/image/istock_sunny_sky_with_grass_000005407896small.jpg?itok=flbPOoPg)');
      
      if((weather).includes("storm"))
        $('body').css("backgroundImage",'url(http://media.nola.com/hurricane_impact/photo/irma-reaches-category-5-hurricane-wields-strongest-winds-ever-recorded-for-an-atlantic-storm-bc4eca6e4018e9f7.jpg)');
      
      if((weather).includes("thunder"))
        $('body').css("backgroundImage",'url(https://i.ytimg.com/vi/-ZndUINPPW8/maxresdefault.jpg)');
      
      if((weather).includes("snow"))
        $('body').css("backgroundImage",'url(https://wallpaperscraft.com/image/snowfall_winter_precipitation_trees_60966_1920x1080.jpg)');
   
      if((weather).includes("windy"))
        $('body').css("backgroundImage",'url(http://paintingcontractorusa.com/blog/wp-content/uploads/2013/03/windy-weather.jpg)');
      
      if((weather).includes("cold"))
        $('body').css("backgroundImage",'url(https://alpineairdirect.com/wp-content/uploads/2014/09/air-purifier-cold-outside.png)');
      
      if((weather).includes("smoke"))
        $('body').css("backgroundImage",'url(http://cfjctoday.com/sites/default/files/styles/main_image/public/field/image/VCRD112415369.jpg?itok=8xskL9mO)');
      
      
    }
  }
  
  
  //Fetching the weather info
  
  var new_url= "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";
  xhttp.open("GET",new_url, true);
  xhttp.send();
}

function changeTemp(){
  //$("#b1").prop("","Celcius");
  //var temp1=tempr;
  var temp1=tempr;
  var button=document.getElementById("b1");
  console.log(button.value);
  if(button.value=="Fahrenheat")
  {
    temp1=(1.8*temp1)+32;
    document.getElementById("temp").innerHTML=temp1+"F";
    button.value="Celcius";
  }
  else{
    temp1=(temp1-32)/1.8;
    document.getElementById("temp").innerHTML=temp1+"C";
    button.value="Fahrenheat";
  }
  
  console.log(temp1);
}