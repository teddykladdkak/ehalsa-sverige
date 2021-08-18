function monthText(month){return month.replace('12', 'dec').replace('11', 'nov').replace('10', 'okt').replace('09', 'sep').replace('08', 'aug').replace('07', 'jul').replace('06', 'jun').replace('05', 'maj').replace('04', 'apr').replace('03', 'mar').replace('02', 'feb').replace('01', 'jan');};
function checkPassed(v){var s = v.split('-');var d = new Date(s[0], parseInt(s[1])-1, parseInt(s[2]), 8, 0, 0, 0);var t = new Date();if(d.getTime() > t.getTime()){return true;}else{return false;};};
var maxelements = 0;
Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSbjbryKgVBlKFeb4tIW85RvTWUD48YFVARLE7k7mJYibPQiBwvqzbQiGuA5V6eh4sKyEBi6t0uU7rv/pub?output=csv", {
    download: true,
    step: function(row) {
        if(row.data[0] == "Start"){}else{
            if(checkPassed(row.data[0])){
                ++maxelements;
                if(maxelements <= 5){
                    var wrapper = document.getElementById('event-wrapper');
                        var link = document.createElement('a');
                            link.setAttribute('href', row.data[3]);
                            link.setAttribute('class', 'cal-ev');
                            link.setAttribute('title', row.data[2]);
                            link.setAttribute('target', '_blank');
                            var linkDate = document.createElement('div');
                                linkDate.setAttribute('class', 'cal-ev-col');
                                var linkDateDay = document.createElement('div');
                                    linkDateDay.setAttribute('class', 'oneline');
                                    var linkDateDayText = document.createTextNode(parseInt(row.data[0].split('-')[2]));
                                    linkDateDay.appendChild(linkDateDayText);
                                linkDate.appendChild(linkDateDay);
                                var linkDateMonth = document.createElement('div');
                                    linkDateMonth.setAttribute('class', 'min');
                                    var linkDateMonthText = document.createTextNode(monthText(row.data[0].split('-')[1]));
                                    linkDateMonth.appendChild(linkDateMonthText);
                                linkDate.appendChild(linkDateMonth);
                            link.appendChild(linkDate);
                            var linkTitle = document.createElement('div');
                                linkTitle.setAttribute('class', 'cal-ev-col min');
                                var linkTitleText = document.createTextNode(row.data[2]);
                                linkTitle.appendChild(linkTitleText);
                            link.appendChild(linkTitle);
                        wrapper.appendChild(link);
                };
            };
        };
    },
    error: function(results) {
		console.log('Något gick fel');
        var wrapper = document.getElementById('event-wrapper');
            wrapper.setAttribute('style', 'text-align: center;');
            var errmessage = document.createElement('p');
                errmessage.setAttribute('class', 'err-message light-bg');
                var errmessagetext = document.createTextNode('Kunde inte ladda event, testa att ladda om sidan.');
                errmessage.appendChild(errmessagetext);
            wrapper.appendChild(errmessage);
            var reloadbutton = document.createElement('input');
                reloadbutton.setAttribute('type', 'button');
                reloadbutton.setAttribute('value', 'Ladda om');
                reloadbutton.setAttribute('onclick', 'location.reload();');
            wrapper.appendChild(reloadbutton);
	}
});