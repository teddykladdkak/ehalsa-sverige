---
sitemap:
  exclude: 'yes'
---
var origIcon = 'M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z';
var highlightIcon = 'M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z';
function rensaKarta(){
    var def = document.getElementsByClassName('leaflet-marker-icon');
    for (let a = 0; a < def.length; a++) {
        def[a].setAttribute('src', def[a].getAttribute('src').replace(highlightIcon, origIcon));
    };
    document.getElementById('markerOnTop').innerText = '';
};
function highlight(c){
    rensaKarta();
    document.getElementById('markerOnTop').innerText = '.' + c + ' { z-index: 9999!important };'
    var icons = document.getElementsByClassName(c);
    for (let i = 0; i < icons.length; i++) {
        icons[i].setAttribute('src', icons[i].getAttribute('src').replace(origIcon, highlightIcon));
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

{%- if site.url == "http://localhost:4000" -%}{%- capture eventlink -%}{{ site.microserver.local }}/karta.json{%- endcapture -%}{%- else -%}{%- capture eventlink -%}{{ site.microserver.live }}/karta.json{%- endcapture -%}{%- endif -%}
var loadFile = function (filePath, done) {
    var xhr = new XMLHttpRequest();
        xhr.onload = function () { return done(this.responseText) }
        xhr.open("GET", encodeURI(filePath), true);
        xhr.send();
};
    loadFile("{{ eventlink }}", function (responseText) {
        var res = JSON.parse(responseText);
        console.log('Karta: ' + res.latestUpdate);
        removeElement('loader');
        var kategoriWrapper = document.getElementById('wrapperKategori');
        res.kategorier.forEach(kategori => {
            var wrap = document.createElement('div');
                wrap.setAttribute('id', makeID(kategori.namn));
                wrap.setAttribute('style', 'display: none;');
                var wrapH = document.createElement('h2');
                    var wrapHImg = document.createElement('img');
                        wrapHImg.setAttribute('src', 'data:image/svg+xml,%3Csvg aria-hidden=\'true\' focusable=\'false\' role=\'img\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 512 512\'%3E%3Cpath fill=\'%23' + kategori.color + '\' d=\'' + origIcon + '\'%3E%3C/path%3E%3C/svg%3E');
                        wrapHImg.setAttribute('alt', 'Markering för ' + kategori.namn);
                    wrapH.appendChild(wrapHImg);
                    var wrapHText = document.createTextNode(kategori.namn);
                    wrapH.appendChild(wrapHText);
                wrap.appendChild(wrapH);
                var wrapList = document.createElement('div');
                    wrapList.setAttribute('class', 'karta-col min');
                    var wrapListUlOne = document.createElement('ul');
                    wrapList.appendChild(wrapListUlOne);
                    var wrapListUlTwo = document.createElement('ul');
                    wrapList.appendChild(wrapListUlTwo);
                wrap.appendChild(wrapList);
            kategoriWrapper.appendChild(wrap);
        });
        res.data.forEach(row => {
            var unikID = 'karta-' + Math.random().toString(36).substr(2, 9);
            var filter = makeID(row.region) + ' karta-filter';
            var kategoriFarg = '';
            res.kategorier.forEach(kategori => {
                if(kategori.namn == row.kategori){
                    kategoriFarg = kategori.color;
                };
            });
            var circleIcon = L.icon({iconUrl: 'data:image/svg+xml,%3Csvg aria-hidden=\'true\' focusable=\'false\' role=\'img\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 512 512\'%3E%3Cpath fill=\'%23' + kategoriFarg + '\' d=\'' + origIcon + '\'%3E%3C/path%3E%3C/svg%3E', iconSize: [30, 30], iconAnchor: [15, 15], popupAnchor: [0, 0], className: unikID + ' karta-filter-marker-' + filter});
            var alreadyUsed = checkUsedKor(row.koordinater);
            if(row.lank == '#'){
                var link = row.namn;
            }else{
                var link = '<a href="' + row.lank + '">' + row.namn + '</a>';
            };
            if(!alreadyUsed){
                var koordinatObj = JSON.parse('[' + row.koordinater + ']');
                L.marker(koordinatObj, {icon: circleIcon}).bindPopup(link, {className: unikID.replace('karta-', 'karta-popup-')}).addTo(mymap);
                usedKor.push({kor: row.koordinater, id: unikID});
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
            var headWrapper = document.getElementById(makeID(row.kategori));
            headWrapper.removeAttribute('style');
            var wrapper = headWrapper.getElementsByClassName('karta-col')[0];
            var checkUl = wrapper.getElementsByTagName('ul');
                var li = document.createElement('li');
                    li.setAttribute('class', 'karta-filter-list-' + filter);
                    if(row.lank == '#'){
                        var liA = document.createElement('span');
                    }else{
                        var liA = document.createElement('a');
                            liA.setAttribute('href', row.lank);
                    };
                        liA.setAttribute('onmouseover', 'highlight("' + unikID + '");');
                        liA.setAttribute('onmouseout', 'rensaKarta();');
                        var liAText = document.createTextNode(row.namn);
                        liA.appendChild(liAText);
                    li.appendChild(liA);
            if(checkUl[0].getElementsByTagName('li').length <= checkUl[1].getElementsByTagName('li').length){
                checkUl[0].appendChild(li);
            }else{
                checkUl[1].appendChild(li);
            };
        });
    });
/*Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vS5_gAmo9oFPsMDGmQ-LyIf7i2ZEySuEg9RMS4FQ3sPXJWEd1VholZELScFzCZbJ5Skbs1av6C_L7Lm/pub?output=csv", {
    download: true,
    step: function(row) {
        if(row.data[0] == "Namn"){
            removeElement('loader');
        }else{
            var headWrapper = document.getElementById(row.data[1]);
            if(!headWrapper){}else{
                var unikID = 'karta-' + Math.random().toString(36).substr(2, 9);
                var filter = makeID(row.data[2]) + ' karta-filter';
                var circleIcon = L.icon({iconUrl: 'data:image/svg+xml,%3Csvg aria-hidden=\'true\' focusable=\'false\' role=\'img\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 512 512\'%3E%3Cpath fill=\'%231ddb3c\' d=\'M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z\'%3E%3C/path%3E%3C/svg%3E', iconSize: [30, 30], iconAnchor: [15, 15], popupAnchor: [0, 0], className: unikID + ' karta-filter-marker-' + filter});
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
});*/