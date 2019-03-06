(function(){

    var updateTime = function() {
        var date = new Date(),
            hours = date.getHours(),
            ampm,
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            dayWeek = date.getDay(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();

        

        var pHours = document.getElementById('hours'),
            pAMPM = document.getElementById('ampm'),
            pMinutes = document.getElementById('minutes'),
            pSeconds = document.getElementById('seconds'),
            pDayWeek = document.getElementById('dayWeek'),
            pDay = document.getElementById('day'),
            pMonth = document.getElementById('month'),
            pYear = document.getElementById('year');

        var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        pDayWeek.textContent = week[dayWeek];

        pDay.textContent = day;

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        pMonth.textContent = months[month];

        pYear.textContent = year;

        /* convertimos el reloj de uno de 24 horas, en uno de 12 */
         if (hours >= 12) {

           /* hours = hours - 12;       convertimos el reloj de uno de 24 horas, en uno de 12 */
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }
        
        /* Para que los minutos en vez de salir numeros solos, salgan con el 0 delante */
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        /* Para que los segundos en vez de salir numeros solos, salgan con el 0 delante */
        if (seconds < 10) {
            seconds = '0' + seconds;
        }


        pHours.textContent = hours;
        pAMPM.textContent = ampm;
        pMinutes.textContent = minutes;
        pSeconds.textContent = seconds;

        var pGreeting = document.getElementById("greeting");

        pGreeting.textContent = greeting;

        if (hours >= 5 && hours <= 11) {
            greeting = 'Good morning, Elías!';
        }

        if (hours >= 12 && hours <= 17) {
            greeting = 'Good afternoon, Elías!';
        }

        if (hours >= 18 && hours <= 21) {
            greeting = 'Good evening, Elías!';
        }

        if (hours >= 22 && hours <= 23) {
            greeting = 'Good night, Elías!';
        }

        if (hours >= 0 && hours <= 4) {
            greeting = 'Good night, Elías!';
        }
        
    };

    updateTime();
    
    var interval = setInterval(updateTime, 1000);


}())





/* Para el boton x del buscador de google */
$(document).ready(function(){
    $(".input").focus(function(){
        $(".close-btn").addClass("active");
    });

    $(".input").focusout(function(){
        $(".close-btn").removeClass("active");
        $(this).val("");
    });
});
