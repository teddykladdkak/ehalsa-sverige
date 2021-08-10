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
function monthText(month){
    return month.replace('12', 'dec').replace('11', 'nov').replace('10', 'okt').replace('09', 'sep').replace('08', 'aug').replace('07', 'jul').replace('06', 'jun').replace('05', 'maj').replace('04', 'apr').replace('03', 'mar').replace('02', 'feb').replace('01', 'jan');
};
getJSON('https://spreadsheets.google.com/feeds/cells/' + sheetID + '/1/public/values?alt=json',  function(err, rawdata) {
    if (err != null) {
        console.error(err);
    }else{
        if(!rawdata.feed){ var data = JSON.parse(rawdata); }else{ var data = rawdata; };
        var wrapper = document.getElementById('event-wrapper');
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
        for (var b = 0; b < array.length; b++){
            var d = new Date(array[b].start, 8, 0, 0, 0);
            var today = new Date();
            array[b].millisec = d.getTime();
            if(d.getTime() <= today.getTime()){ array.splice(b, 1); };
        };
        array.sort(function(a , b) { return a.millisec - b.millisec; });
        for (var a = 0; a < array.length; a++){
            if (a === 5) { break; };
            var link = document.createElement('a');
                link.setAttribute('href', array[a].link);
                link.setAttribute('class', 'cal-ev');
                link.setAttribute('title', array[a].title);
                link.setAttribute('target', '_blank');
                var linkDate = document.createElement('div');
                    linkDate.setAttribute('class', 'cal-ev-col');
                    var linkDateDay = document.createElement('div');
                        linkDateDay.setAttribute('class', 'oneline');
                        var linkDateDayText = document.createTextNode(parseInt(array[a].start.split('-')[2]));
                        linkDateDay.appendChild(linkDateDayText);
                    linkDate.appendChild(linkDateDay);
                    var linkDateMonth = document.createElement('div');
                        linkDateMonth.setAttribute('class', 'min');
                        var linkDateMonthText = document.createTextNode(monthText(array[a].start.split('-')[1]));
                        linkDateMonth.appendChild(linkDateMonthText);
                    linkDate.appendChild(linkDateMonth);
                link.appendChild(linkDate);
                var linkTitle = document.createElement('div');
                    linkTitle.setAttribute('class', 'cal-ev-col min');
                    var linkTitleText = document.createTextNode(array[a].title);
                    linkTitle.appendChild(linkTitleText);
                link.appendChild(linkTitle);
            wrapper.appendChild(link);
        };
    };
});