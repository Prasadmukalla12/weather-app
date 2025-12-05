 function SearchClick(){
            
            var lblCityname=document.getElementById("lblCity");
            var description=document.getElementById("lblDes");
            var temprature=document.getElementById("lblTemp");
            var visibility=document.getElementById("visibility");
            var pressure=document.getElementById("pressure");
            var wind=document.getElementById("wind");
            var humidity=document.getElementById("humidity");

            var city=document.getElementById("cityName").value;

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b06ff638162b2ac82cdb7cc2fdc0bca&units=metric`)
            .then(function(response){
                return response.json()
            })
            .then(function(data){
               lblCityname.innerHTML=`<h6 class="text-dark fw-bold d-inline">LOCATION : </h6> ${data.name.toUpperCase()}`
               description.innerHTML=`<h6 class="text-dark fw-bold d-inline">DESCRIPTION : </h6>${data.weather[0].description.toUpperCase()}`;
               temprature.innerHTML=`${data.main.temp}<sup>&deg</sup> C`;
               visibility.innerHTML=`<h6 class="text-dark d-inline fw-bold"> Visibility </h6> <br>${data.visibility}`;
               pressure.innerHTML=`<h6 class="text-dark d-inline fw-bold"> Pressure </h6> <br>${data.main.pressure}`;
               wind.innerHTML=`<h5 class="text-black d-inline fw-bold"> WIND SPEED </h5> <br>${data.wind.speed.toLocaleString("en-in",{style:"unit",unit:"kilometer-per-hour"})}`;
               humidity.innerHTML=`<h5 class="text-black d-inline fw-bold"> HUMIDITY</h5> <br>${data.main.humidity}`;
            })
         }