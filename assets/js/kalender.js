var sheetID = '1cPIwY55QT-ef1VTr2bKS50gw5NtqFjwJkJXyqBTgmtw';
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            var status = xhr.status;
            if (status == 200) {
                callback(null, xhr.response);
            } else {
                callback(status);
            }
        };
        xhr.send();
};
getJSON('https://spreadsheets.google.com/feeds/cells/' + sheetID + '/1/public/values?alt=json',  function(err, rawdata) {
    if (err != null) {
        var wrapper = document.getElementById('calendar');
            wrapper.setAttribute('style', 'text-align: center;padding-bottom: 20px;');
            var errmessage = document.createElement('p');
                var errmessagetext = document.createTextNode('Kunde inte ladda event, testa att ladda om sidan.');
                errmessage.appendChild(errmessagetext);
            wrapper.appendChild(errmessage);
            var reloadbutton = document.createElement('input');
                reloadbutton.setAttribute('type', 'button');
                reloadbutton.setAttribute('value', 'Ladda om');
                reloadbutton.setAttribute('onclick', 'location.reload();');
            wrapper.appendChild(reloadbutton);
        console.error(err);
    }else{
        if(!rawdata.feed){ var data = JSON.parse(rawdata); }else{ var data = rawdata; };
        var array = [];
        for (var i = 0; i < data.feed.entry.length; i++){
            if(data.feed.entry[i].gs$cell['row'] == '1'){}else{
                var arrnum = data.feed.entry[i].gs$cell['row'] - 2;
                if(!array[arrnum]){ array.push({start: '', end: '', title: '', link: '', organizer: '', theme: ''}); };
                var colnum = data.feed.entry[i].gs$cell['col'];
                var content = data.feed.entry[i].content['$t'];
                if(colnum == 1) {
                    array[arrnum].start = content;
                }else if(colnum == 2) {
                    array[arrnum].end = content;
                }else if(colnum == 3) {
                    array[arrnum].title = content;
                }else if(colnum == 4) {
                    array[arrnum].link = content;
                }else if(colnum == 5) {
                    array[arrnum].organizer = content;
                }else if(colnum == 6) {
                    array[arrnum].theme = content;
                }else{
                    console.log('Något är fel med kalender kalkylen.');
                };
            };
        };
        array.sort(function(a , b) { return a.millisec - b.millisec; });
        var events = [];
        for (var a = 0; a < array.length; a++){
            var eventtopush = {title: array[a].title, start: array[a].start, url: array[a].link};
            if(!array[a].end || array[a].end == ''){}else{
                var datea = new Date(array[a].end);
                var dateb = datea.getTime() + (((1000 * 60) * 60) * 24);
                var datec = new Date(dateb);
                eventtopush.end = datec.getFullYear() + '-' + (datec.getMonth() + 1).toString().padStart(2, 0) + '-' + datec.getDate().toString().padStart(2, 0);
            };
            events.push(eventtopush);
        };
        addKalender(events);
    };
});
function addKalender(ev){
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: ev
    });
    calendar.render();
};