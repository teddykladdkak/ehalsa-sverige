Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSbjbryKgVBlKFeb4tIW85RvTWUD48YFVARLE7k7mJYibPQiBwvqzbQiGuA5V6eh4sKyEBi6t0uU7rv/pub?output=csv", {
    download: true,
    error: function(results) {
        console.log('Något gick fel');
        var wrapper = document.getElementById('calendar');
            wrapper.setAttribute('style', 'text-align: center;padding-bottom: 20px;');
            var errmessage = document.createElement('p');
                errmessage.setAttribute('class', 'err-message');
                var errmessagetext = document.createTextNode('Kunde inte ladda event, testa att ladda om sidan.');
                errmessage.appendChild(errmessagetext);
            wrapper.appendChild(errmessage);
            var reloadbutton = document.createElement('input');
                reloadbutton.setAttribute('type', 'button');
                reloadbutton.setAttribute('value', 'Ladda om');
                reloadbutton.setAttribute('onclick', 'location.reload();');
            wrapper.appendChild(reloadbutton);
    },
    complete: function(results) {
        var ev = [];
        for (var a = 0; a < results.data.length; a++){
            if(results.data[a][0] == 'Start'){}else{
                var eventtopush = {title: results.data[a][2], start: results.data[a][0], url: results.data[a][3]};
                if(!results.data[a][1] || results.data[a][1] == ''){}else{
                    var datea = new Date(results.data[a][1]);
                    var dateb = datea.getTime() + (((60*1000)*60)*24);
                    var datec = new Date(dateb);
                    eventtopush.end = datec.getFullYear() + '-' + (datec.getMonth() + 1).toString().padStart(2, 0) + '-' + datec.getDate().toString().padStart(2, 0);
                };
                ev.push(eventtopush);
            };
        };
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            events: ev
        });
        calendar.render();
    }
});