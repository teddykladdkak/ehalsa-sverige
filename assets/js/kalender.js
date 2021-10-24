function filterArrangor(arrangorText){
    var arrangor = getParameterByName('arrangor');
    if(arrangor == null){
        return true;
    }else{
        var arrangorSplit = decodeURI(arrangor).split(',');
        for (let i = 0; i < arrangorSplit.length; i++) {
            if(arrangorText == arrangorSplit[i]){
                return true;
            };
        };
    };
    return false;
};
function filterPlats(platsCode){
    var plats = getParameterByName('plats');
    if(plats == null){
        return true;
    }else{
        if(plats == '1'){
            if(platsCode == '1'){
                return true;
            }else if(platsCode == '3'){
                return true;
            }else{
                return false;
            };
        }else if(plats == '2'){
            if(platsCode == '2'){
                return true;
            }else if(platsCode == '3'){
                return true;
            }else{
                return false;
            };
        }else{
            return true;
        };
    };
    return false;
};
function filerKostnad(kostnadCode){
    var kostnad = getParameterByName('gratis');
    if(kostnad == null){
        return true;
    }else{
        if(kostnad == 'true'){
            if(kostnadCode == ''){
                return false;
            }else if(kostnadCode == 'TRUE'){
                return false;
            }else{
                return true;
            };
        }else{
            return true;
        };
    };
    return false;
};
function filter(arrangorText, platsCode , kostnadCode){
    var arrangor = filterArrangor(arrangorText);
    var plats = filterPlats(platsCode);
    var kostnadCode = filerKostnad(kostnadCode);
    if(arrangor && plats && kostnadCode){
        return true;
    }else{
        return false;
    };
};
var getContrast = function (hexcolor){
    /*!
    * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
    * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
    */
	if (hexcolor.slice(0, 1) === '#') {
		hexcolor = hexcolor.slice(1);
	}
	if (hexcolor.length === 3) {
		hexcolor = hexcolor.split('').map(function (hex) {
			return hex + hex;
		}).join('');
	};
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);
	var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
	return (yiq >= 128) ? 'black' : 'white';
};
function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};
var arrangor = [];
function addArrangor(namn){
    var namnSplt = namn.split(', ')[0];
    var add = true;
    for (let i = 0; i < arrangor.length; i++) {
        if(arrangor[i].namn == namnSplt){
            add = false;
            var randomColor = arrangor[i].color;
            break;
        };
    };
    if(add){
        var randomColor = generateRandomColor();
        arrangor.push({namn: namnSplt, color: randomColor});
    };
    return randomColor;
};
function addFilter(){
    var plats = [{text: 'Välj typ av plats', kod: '0'},{text: 'Digital', kod: '1'},{text: 'Fysisk', kod: '2'},{text: 'Både digital & fysisk', kod: '3'}];
    var wrapper = document.getElementsByClassName('calendarbody')[0];
        var details = document.createElement('details');
            var rubrik = document.createElement('summary');
                var rubrikT = document.createTextNode('Filter');
                rubrik.appendChild(rubrikT);
            details.appendChild(rubrik);
            var select = document.createElement('select');
                for (let i = 0; i < plats.length; i++) {
                    var option = document.createElement('option');
                        option.setAttribute('value', plats[i].kod);
                        var optionT = document.createTextNode(plats[i].text);
                        option.appendChild(optionT);
                    select.appendChild(option);
                };
            details.appendChild(select);
            var buttonFilter = document.createElement('input');
                buttonFilter.setAttribute('type', 'button');
                buttonFilter.setAttribute('style', 'display: block;');
                buttonFilter.setAttribute('value', 'Applicera filter');
            details.appendChild(buttonFilter);
        wrapper.appendChild(details);
};
function indexArrangor(){
    var wrapper = document.getElementsByClassName('calendarbody')[0];
        var details = document.createElement('details');
            var rubrik = document.createElement('summary');
                var rubrikT = document.createTextNode('Arrangör');
                rubrik.appendChild(rubrikT);
            details.appendChild(rubrik);
            var table = document.createElement('table');
                table.setAttribute('class', 'min');
                var tBody = document.createElement('tbody');
                for (let i = 0; i < arrangor.length; i++) {
                    var line = document.createElement('tr');
                        var color = document.createElement('td');
                            color.setAttribute('style', 'width: 20px; background-color: ' + arrangor[i].color + ';');
                        line.appendChild(color);
                        var text = document.createElement('td');
                            var textT = document.createTextNode(arrangor[i].namn);
                            text.appendChild(textT);
                        line.appendChild(text);
                    tBody.appendChild(line);
                };
                table.appendChild(tBody);
            details.appendChild(table);
        wrapper.appendChild(details);
        var space = document.createElement('br');
        wrapper.appendChild(space);
};
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
                if(filter(results.data[a][4].split(',')[0], results.data[a][5], results.data[a][6])){
                    var color = addArrangor(results.data[a][4]);
                    var tColor = getContrast(color);
                    var eventtopush = {title: results.data[a][2], start: results.data[a][0], url: results.data[a][3], backgroundColor: color, borderColor: color, textColor: tColor};
                    if(!results.data[a][1] || results.data[a][1] == ''){}else{
                        if(results.data[a][1].split('T').length == 2){
                            eventtopush.end = results.data[a][1];
                        }else{
                            var datea = new Date(results.data[a][1]);
                            var dateb = datea.getTime() + (((60*1000)*60)*24);
                            var datec = new Date(dateb);
                            eventtopush.end = dateFormat(datec);
                        };
                    };
                    ev.push(eventtopush);
                };
            };
        };
        var calendarEl = document.getElementById('calendar');
        const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(width > 800){
            var view = 'dayGridMonth';
        }else{
            var view = 'listWeek';
        };
        var calendar = new FullCalendar.Calendar(calendarEl, {
            locale: 'sv',
            eventDidMount: function(info) {
                info.el.setAttribute('title', info.event['_def'].title)
            },
            headerToolbar: {
                left: 'dayGridMonth,timeGridWeek,listWeek',
                center: 'title',
                right: 'prevYear,prev,next,nextYear'
            },
            views: {
                dayGridMonth: { buttonText: 'Månad' },
                timeGridWeek: { buttonText: 'Vecka' },
                listWeek: { buttonText: 'Lista' }
            },
            initialView: view,
            events: ev,
            eventTimeFormat: { 
                hour: '2-digit',
                minute: '2-digit',
                hour12:false
            }
        });
        removeElements(calendarEl);
        calendar.render();
        /*addFilter();*/
        indexArrangor();
    }
});