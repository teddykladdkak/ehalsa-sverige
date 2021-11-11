
var postXhr = new XMLHttpRequest();
var windowTextID = '';
    postXhr.onreadystatechange = function () {
        if (this.readyState != 4) return;
        document.getElementById(windowTextID).value = '';
        if (this.status == 200) {
            var wrapper = document.getElementById('contact-form');
            if(this.responseText == 'ok'){
                oppnaModal('sendSuccess');
            }else{
                oppnaModal('sendError');
            };
        }else{
            oppnaModal('sendError');
        };
    };
function post(el, textID, url){
    el.setAttribute('disabled', 'disabled');
    window['windowTextID'] = textID;
    var text = document.getElementById(textID).value;
    postXhr.open('POST', 'https://hooks.slack.com/services/' + url, true);
    postXhr.send(JSON.stringify({"text": text}));
};
function checkEnter(event, buttonID){ if (event.keyCode === 13) { document.getElementById(buttonID).click(); }; };