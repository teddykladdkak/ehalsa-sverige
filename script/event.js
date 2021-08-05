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
        console.error(err);
    }else{
        if(!rawdata.feed){ var data = JSON.parse(rawdata); }else{ var data = rawdata; };
        var wrapper = document.getElementById('event-wrapper');
        var array = [];
        for (var i = 0; i < data.feed.entry.length; i++){
            if(data.feed.entry[i].gs$cell['row'] == '1'){}else{
                var arrnum = data.feed.entry[i].gs$cell['row'] - 2;
                if(!array[arrnum]){ array.push({year: '', month: '', day: '', title: '', link: '', organizer: '', theme: ''}); };
                var colnum = data.feed.entry[i].gs$cell['col'];
                var content = data.feed.entry[i].content['$t'];
                if(colnum == 1) {
                    array[arrnum].year = content;
                }else if(colnum == 2) {
                    array[arrnum].month = content;
                }else if(colnum == 3) {
                    array[arrnum].day = content;
                }else if(colnum == 4) {
                    array[arrnum].title = content;
                }else if(colnum == 5) {
                    array[arrnum].link = content;
                }else if(colnum == 6) {
                    array[arrnum].organizer = content;
                }else if(colnum == 7) {
                    array[arrnum].theme = content;
                }else{
                    console.log('Något är fel med kalender kalkylen.');
                };
            };
        };
        for (var a = 0; a < array.length; a++){

if (a === 6) { break; };

            var link = document.createElement('a');
                link.setAttribute('href', array[a].link);
                link.setAttribute('class', 'cal-ev');
                link.setAttribute('title', array[a].title);
                link.setAttribute('target', '_blank');
                var linkDate = document.createElement('div');
                    linkDate.setAttribute('class', 'cal-ev-col');
                    var linkDateDay = document.createElement('div');
                        linkDateDay.setAttribute('class', 'oneline');
                        var linkDateDayText = document.createTextNode(array[a].day);
                        linkDateDay.appendChild(linkDateDayText);
                    linkDate.appendChild(linkDateDay);
                    var linkDateMonth = document.createElement('div');
                        linkDateMonth.setAttribute('class', 'min');
                        var linkDateMonthText = document.createTextNode(array[a].month);
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