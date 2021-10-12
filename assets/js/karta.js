function rensaKarta(){
    var def = document.getElementsByClassName('leaflet-marker-icon');
    for (let a = 0; a < def.length; a++) {
        def[a].setAttribute('src', def[a].getAttribute('src').replace('-highlight.svg', '.svg'));
    };
    document.getElementById('markerOnTop').innerText = '';
};
function highlight(c){
    rensaKarta();
    document.getElementById('markerOnTop').innerText = '.' + c + ' { z-index: 9999!important };'
    var icons = document.getElementsByClassName(c);
    for (let i = 0; i < icons.length; i++) {
        icons[i].setAttribute('src', icons[i].getAttribute('src').replace('.svg', '-highlight.svg'));
    };
};
function makeID(region){
    return region.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
};
function filter(el){
    if(el.value == ''){
        document.getElementsByClassName('karta-list')[0].setAttribute('class', 'karta-list');
        document.getElementById('filterStyle').innerText = '';
        mymap.setView([62.5, 17.5], 5);
    }else{
        document.getElementsByClassName('karta-list')[0].setAttribute('class', 'karta-list filtered');
        document.getElementById('filterStyle').innerText = '.karta-filter { display: none; } .karta-filter-list-' + makeID(el.value) + ' { display: list-item; } .karta-filter-marker-' + makeID(el.value) + ' { display: block; }';
        mymap.setView(JSON.parse('[' + getRegionKor(el.value) + ']'), 7);
    };
};
function checkInclude(obj, sep, str){
    var split = obj.split(sep);
    for (let i = 0; i < split.length; i++) {
        if(split[i] == str){
            return true;
        };
    };
    return false;
};
var mymap = L.map('karta1').setView([62.5, 17.5], 5);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoidGVkZHlrbGFkZGthayIsImEiOiJja3NsazF6aTkwcDQyMnBudTRveW40bDByIn0.UOrVx1Mt69ZPKCJEpdwwjQ'
    }).addTo(mymap);
Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vS5_gAmo9oFPsMDGmQ-LyIf7i2ZEySuEg9RMS4FQ3sPXJWEd1VholZELScFzCZbJ5Skbs1av6C_L7Lm/pub?output=csv", {
    download: true,
    step: function(row) {
        if(row.data[0] == "Namn"){
            loader.parentElement.removeChild(loader);
        }else{
            var headWrapper = document.getElementById(row.data[1]);
            if(!headWrapper){}else{
                var unikID = 'karta-' + Math.random().toString(36).substr(2, 9);
                var filter = makeID(row.data[2]) + ' karta-filter';
                var circleIcon = L.icon({iconUrl: '/assets/css/leaflet/circle-' + makeID(row.data[1]) + '.svg', iconSize: [30, 30], iconAnchor: [15, 15], popupAnchor: [0, 0], className: unikID + ' karta-filter-marker-' + filter});
                if(!row.data[4] == ""){
                    var koordinat = row.data[4];
                }else if(!row.data[3] == ""){
                    var koordinat = getStadKor(row.data[3]);
                }else if(!row.data[2] == ""){
                    var koordinat = getRegionKor(row.data[2]);
                }else{
                    console.log('Koordinat fattas för: ' + row.data[0]);
                };
                var alreadyUsed = checkUsedKor(koordinat);
                if(row.data[5] == '#'){
                    var link = row.data[0];
                }else{
                    var link = '<a href="' + row.data[5] + '">' + row.data[0] + '</a>';
                };
                if(!alreadyUsed){
                    var koordinatObj = JSON.parse('[' + koordinat + ']');
                    L.marker(koordinatObj, {icon: circleIcon}).bindPopup(link, {className: unikID.replace('karta-', 'karta-popup-')}).addTo(mymap);
                    usedKor.push({kor: koordinat, id: unikID});
                }else{
                    mymap.eachLayer(function(feature){
                        if(!feature._icon){}else{
                            if(checkInclude(feature._icon.className, ' ', alreadyUsed)){
                                var newContent = feature.getPopup()._content + '<br/>' + link;
                                feature.setPopupContent(newContent);
                            };
                        };
                    });
                    var unikID = alreadyUsed;
                };
                headWrapper.removeAttribute('style');
                var wrapper = headWrapper.getElementsByClassName('karta-col')[0];
                var checkUl = wrapper.getElementsByTagName('ul');
                    var li = document.createElement('li');
                        li.setAttribute('class', 'karta-filter-list-' + filter);
                        if(row.data[5] == '#'){
                            var liA = document.createElement('span');
                        }else{
                            var liA = document.createElement('a');
                                liA.setAttribute('href', row.data[5]);
                        };
                            liA.setAttribute('onmouseover', 'highlight("' + unikID + '");');
                            liA.setAttribute('onmouseout', 'rensaKarta();');
                            var liAText = document.createTextNode(row.data[0]);
                            liA.appendChild(liAText);
                        li.appendChild(liA);
                if(checkUl[0].getElementsByTagName('li').length <= checkUl[1].getElementsByTagName('li').length){
                    checkUl[0].appendChild(li);
                }else{
                    checkUl[1].appendChild(li);
                };
            };
        };
    },
    complete: function(results) {
        
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