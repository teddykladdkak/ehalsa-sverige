
var xhr = new XMLHttpRequest();
function remove(wrapper){while (wrapper.firstChild) {wrapper.removeChild(wrapper.lastChild);}};
var windowTextID = '';
xhr.onreadystatechange = function () {
    if (this.readyState != 4) return;

    if (this.status == 200) {
        var wrapper = document.getElementById('contact-form');
        if(this.responseText == 'ok'){
            var text = document.getElementById(windowTextID);
                text.setAttribute('disabled', 'disabled');
                text.setAttribute('class', 'send-approved');
        }else{
            var text = document.getElementById(windowTextID);
                text.setAttribute('disabled', 'disabled');
                text.setAttribute('class', 'send-error');
        };
    }else{
        var text = document.getElementById(windowTextID);
            text.setAttribute('disabled', 'disabled');
            text.setAttribute('class', 'send-error');
    };
};

function post(el, textID, url){
    el.setAttribute('disabled', 'disabled');
    window['windowTextID'] = textID;
    var text = document.getElementById(textID).value;
    xhr.open('POST', url, true);
    xhr.send(JSON.stringify({"text": text}));
};

function checkEnter(event, buttonID){ if (event.keyCode === 13) { document.getElementById(buttonID).click(); }; };