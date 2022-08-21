---
sitemap:
  exclude: 'yes'
---
function filterTable(el){
    var allLines = document.getElementById('foretag_wrapper').getElementsByTagName('tr');
    if(el.value == '' || !el){
        addToTable(baseForetag);
    }else{
        var filterForetag = [];
        for (let i = 0; i < baseForetag.length; i++) {
            if(baseForetag[i].namn.toLowerCase().includes(el.value.toLowerCase()) || baseForetag[i].omrade.toLowerCase().includes(el.value.toLowerCase())){
                filterForetag.push(baseForetag[i]);
            };
        };
        addToTable(filterForetag);
    };
};
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("foretag_wrapper");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 0; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                };
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                };
            };
        };
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        };
    };
};
var baseForetag = [];
function addToTable(foretag){
    var wrapper = document.getElementById('foretag_wrapper');
        wrapper.innerHTML = '';
    if(foretag.length == 0){foretag.push({"namn": "Inga företag stämmer på filter", "omrade": "hide", "url": false});};
    for( var i=0,t = foretag.length ; i < t ; ++i ){
        var tr = document.createElement('tr');
            tr.setAttribute('onclick', 'window.open("' + foretag[i].url + '", "_blank");');
            tr.setAttribute('tabindex', '0');
            tr.setAttribute('onkeypress', 'handleEnter(this, event);');
            var namn = document.createElement('td');
            if(foretag[i].omrade == 'hide'){
                namn.setAttribute('colspan', '2');
                namn.setAttribute('style', 'text-align: center;');
            };
                var namnT = document.createTextNode(foretag[i].namn);
                namn.appendChild(namnT);
            tr.appendChild(namn);
            if(foretag[i].omrade == 'hide'){}else{
                var omr = document.createElement('td');
                    var omrT = document.createTextNode(foretag[i].omrade);
                    omr.appendChild(omrT);
                tr.appendChild(omr);
            };
        wrapper.appendChild(tr);
    };
};
function handleEvent(e) {
    var wrapper = document.getElementById('foretag_wrapper');
        wrapper.innerHTML = '';
        var tr = document.createElement('tr');
            var namn = document.createElement('td');
                namn.setAttribute('colspan', '2');
                namn.setAttribute('style', 'text-align: center;');
                var namnT = document.createTextNode('Företag kunde av någon anledning inte hämtas.');
                namn.appendChild(namnT);
            tr.appendChild(namn);
        wrapper.appendChild(tr);
    console.log(`Företag kunde inte laddas pga: "${e.type}" (${e.loaded} bytes transferred)`);
    errorPost(`Företag kunde inte laddas pga: "${e.type}" (${e.loaded} bytes transferred)`);
};
{%- if site.url == "http://0.0.0.0:4000" -%}{%- capture eventlink -%}{{ site.microserver.foretag.local }}{%- endcapture -%}{%- else -%}{%- capture eventlink -%}{{ site.microserver.foretag.live }}{%- endcapture -%}{%- endif -%}
var loadFile = function (filePath, done) {
    var xhr = new XMLHttpRequest();
        xhr.addEventListener('error', handleEvent);
        xhr.onload = function () { return done(this.responseText) }
        xhr.open("GET", encodeURI(filePath), true);
        xhr.send();
};
    loadFile("{{ eventlink }}", function (responseText) {
        var res = JSON.parse(responseText);
        window['baseForetag'] = res;
        addToTable(res);
    });