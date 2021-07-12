/*Forecasting */

         
                    /*LES VARIABLES */
    var today_temp = document.getElementById('today_temp');
    var today_icon = document.getElementById('today_icon');
    var city = document.getElementById('city');
    var feels = document.getElementById('feels');
    var sunset = document.getElementById('sunset');

    //LES VARIABLES DE PRÉVISION HORAIRES

        var h11 = document.getElementById('h11');
        var h12 = document.getElementById('h12');
        var h13 = document.getElementById('h13');

        var h21 = document.getElementById('h21');
        var h22 = document.getElementById('h22');
        var h23 = document.getElementById('h23');

        var h31 = document.getElementById('h31');
        var h32 = document.getElementById('h32');
        var h33 = document.getElementById('h33');

        var h41 = document.getElementById('h41');
        var h42 = document.getElementById('h42');
        var h43 = document.getElementById('h43');

        var h51 = document.getElementById('h51');
        var h52 = document.getElementById('h52');
        var h53 = document.getElementById('h53');

        var h61 = document.getElementById('h61');
        var h62 = document.getElementById('h62');
        var h63 = document.getElementById('h63');


                     //DATE

    var date = document.getElementById('date');
    var d = new Date();
    var jm = d.getDate();
    var j = d.getDay();
    var m = d.getMonth();
                 
     var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
     var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                 
    date.innerText = day[j] + ', ' + jm +' ' + months[m];

                   

    const key = 'cbf5dd1f3da5762e07db424bdae7a442';//Apikey

        let apicall;

    var loc = navigator.geolocation;

    if(loc){
        loc.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
                console.log(lat, lon);
               
                
                                                //API REQUEST

    const  base = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

        const apiRequest = async() => {

                apicall = await fetch(base)
                .then(res => res.json());
                    console.log(apicall);

                    //RECUPERATION DES DONNEES ENVOYES PAR L'API
 
                   
                //DONNÉES DE TODAY

                today_icon.innerHTML = '<img src="http://openweathermap.org/img/w/'+ apicall.current.weather[0].icon + '.png">';
                today_temp.innerText = Math.round(apicall.current.temp);
                city.innerText = apicall.timezone;
                feels.innerText += Math.round( apicall.current.feels_like);

                   
                    var date1 = new Date(apicall.current.sunset * 1000);
                
                    sunset.innerText += '  ' + date1.getHours() + ' : ' + date1.getMinutes();


                //LES PRÉVISIONS DES 6 PORCHAINES HEURES.

                var d1 = new Date(apicall.hourly[1].dt * 1000);
            h11.innerHTML = d1.getHours() + 'h';
            h12.innerHTML = '<img src="http://openweathermap.org/img/w/'+ apicall.hourly[1].weather[0].icon + '.png">';
            h13.innerText = Math.round(apicall.hourly[1].temp);

                var d2 = new Date(apicall.hourly[2].dt * 1000);
            h21.innerText = d2.getHours() + 'h';
            h22.innerHTML = '<img src="http://openweathermap.org/img/w/'+ apicall.hourly[2].weather[0].icon + '.png">';
            h23.innerText = Math.round(apicall.hourly[2].temp);

            var d3 = new Date(apicall.hourly[3].dt * 1000);

            h31.innerText = d3.getHours() + 'h';
            h32.innerHTML = '<img src="http://openweathermap.org/img/w/'+ apicall.hourly[3].weather[0].icon + '.png">';
            h33.innerText = Math.round(apicall.hourly[3].temp);

                var d4 = new Date(apicall.hourly[4].dt * 1000);

            h41.innerText = d4.getHours() + 'h'; 
            h42.innerHTML = '<img src="http://openweathermap.org/img/w/'+ apicall.hourly[4].weather[0].icon + '.png">';
            h43.innerText = Math.round(apicall.hourly[4].temp);

                var d5 = new Date(apicall.hourly[5].dt * 1000);

            h51.innerText = d5.getHours() + 'h';
            h52.innerHTML = '<img src="http://openweathermap.org/img/w/'+ apicall.hourly[5].weather[0].icon + '.png">';
            h53.innerText = Math.round(apicall.hourly[5].temp);

                var d6 = new Date(apicall.hourly[6].dt *1000);

            h61.innerText = d6.getHours() + 'h';
            h62.innerHTML = '<img src="http://openweathermap.org/img/w/'+ apicall.hourly[6].weather[0].icon + '.png">';
            h63.innerText = Math.round(apicall.hourly[6].temp);

                           //LE DIAGRAMME

        var g1 = document.getElementById('g1');
        var g2 = document.getElementById('g2');
        var g3 = document.getElementById('g3');
        var g4 = document.getElementById('g4');
       
        g1.innerText = d1.getHours() + 'h';
        g2.innerText = d2.getHours() + 'h';
        g3.innerText = d3.getHours() + 'h';
        g4.innerText = d4.getHours() + 'h';

        
                       //LES PROBABILITES DES PLUIES.

        var pop1 = document.getElementById("pop1");
        var pop2 = document.getElementById("pop2");
        var pop3 = document.getElementById("pop3");
        var pop4 = document.getElementById("pop4");

    pop1.style.width = (apicall.hourly[1].pop*100) + "px";
    pop1.innerText = Math.round(apicall.hourly[1].pop*100) + '%';

  
    pop2.style.width = (apicall.hourly[2].pop*100) + "px";
    pop2.innerText = Math.round(apicall.hourly[2].pop*100) + '%';
  
    pop3.style.width = (apicall.hourly[3].pop*100) + "px";
    pop3.innerText = Math.round(apicall.hourly[3].pop*100) + '%';
    
    pop4.style.width = (apicall.hourly[4].pop*100) + "px";
    pop4.innerText = Math.round(apicall.hourly[4].pop*100) + '%';
      
            //LES DONNÉES DE TOMORROW EN FONCTION D'ÉVÈNEMENT

                /*Déclaration des variables today, tomorrow*/

    var lk_today = document.getElementById('link_today');
    var lk_tomorrow = document.getElementById('link_tomorrow');
    var today = document.getElementById('today');

/*Affichage des données de Today et Tomorrow en fonction d'évènement */

    lk_today.addEventListener('click', fToday);
    lk_tomorrow.addEventListener('click', fTomorrow);

function fToday(){
    
    today.innerHTML = '<strong>Today</strong>';
    date.innerHTML = day[j] + ', ' + jm +' ' + months[m];
    today_icon.innerHTML = '<img src="http://openweathermap.org/img/w/'+ apicall.current.weather[0].icon + '.png">';
    today_temp.innerText = Math.round(apicall.current.temp);
    city.innerText = apicall.timezone;
    feels.innerText = 'Feels likes ' + Math.round(apicall.current.feels_like);

       
        var date1 = new Date(apicall.current.sunset * 1000);
    
        sunset.innerText = 'Sunset ' + date1.getHours() + ' : ' + date1.getMinutes();

    
}
function fTomorrow(){
    today.innerHTML = '<strong>Tomorrow</strong>';
    date.innerHTML = day[j + 1] + ', ' + (jm + 1) + ' ' + months[m];
    today_icon.innerHTML = '<img src="http://openweathermap.org/img/w/'+ apicall.daily[1].weather[0].icon + '.png">';
    today_temp.innerText = Math.round(apicall.daily[1].temp.day);
    city.innerText = apicall.timezone;
    feels.innerText = 'Feels like ' + Math.round(apicall.daily[1].feels_like.day);
            
    var date1 = new Date(apicall.daily[1].sunset * 1000);
    
    sunset.innerText = ' Sunset ' + date1.getHours() + ' : ' + date1.getMinutes();
}

                };

                apiRequest();

        });
    }

    else
    {
        c
    }
    