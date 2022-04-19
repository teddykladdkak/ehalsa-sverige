---
sitemap:
  exclude: 'yes'
---
{%- if site.url == "http://0.0.0.0:4000" -%}{%- capture postlink -%}{{ site.microserver.kontakt.local }}{%- endcapture -%}{%- else -%}{%- capture postlink -%}{{ site.microserver.kontakt.live }}{%- endcapture -%}{%- endif -%}
function handlePostEvent(e) {
    console.log(`Kunde inte skicka meddelande pga: "${e.type}" (${e.loaded} bytes transferred)`);
    errorPost(`Kunde inte skicka meddelande pga: "${e.type}" (${e.loaded} bytes transferred)`);
};
var postXhr = new XMLHttpRequest();
    postXhr.addEventListener('error', handlePostEvent);
var windowTextID = '';
var windowAdressID = '';
    postXhr.onreadystatechange = function () {
        console.log("readyState = " + this.readyState);
        if (this.readyState != 4) return;
        document.getElementById(windowTextID).value = '';
        document.getElementById(windowAdressID).value = '';
        console.log("status = " + this.status);
        if (this.status == 200) {
            console.log(this.responseText);
            oppnaModal('sendSuccess');
        }else{
            oppnaModal('sendError');
        };
        document.getElementById('contactButton').removeAttribute('disabled');
    };
function post(el, textID, adressID){
    window['windowTextID'] = textID;
    window['windowAdressID'] = adressID;
    var text = document.getElementById(textID).value;
    var adress = document.getElementById(adressID).value;
    if(!text || text == ''){
        oppnaModal('sendError');
    }else{
        el.setAttribute('disabled', 'disabled');
        if(!adress || adress == ''){
            adress = 'Ingen adress';
        };
        postXhr.open('POST', '{{ postlink }}', true);
        postXhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        postXhr.send('meddelande=' + text + ' _[' + adress + ']_');
    };
};
function checkEnter(event, buttonID){ if (event.keyCode === 13) { document.getElementById(buttonID).click(); }; };