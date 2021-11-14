/*
# API
* lucka: NUM (Gör att lucka med aktuellt nummer öppnas direkt vid sidladdning)
* datum: ÅÅÅÅ-MM-DD (Forcera eget dagens datum, till tester)
*/
Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vT90tUWUvDqVMGVvMKXGD55BTDUa--DnjBSWoYKyUF9QCs-YNumse-c2NBjdMTL2ZNfHZt7h2kNlPyN/pub?output=csv", {
    download: true,
    error: function(results) {
        console.log('Något gick fel');
    },
    complete: function(results) {
        for (var a = 0; a < results.data.length; a++){
            if(results.data[a][0] == 'ID'){}else{
                var luckaDatum = '2021-12-' + addZero(results.data[a][0]);
                if(getParameterByName('datum')){
                    var checkDate = dateInPast(luckaDatum, getParameterByName('datum'));
                }else{
                    var checkDate = dateInPast(luckaDatum);
                };
                /*if(results.data[a][5] == 'TRUE' || checkDate){*/
                if(checkDate){
                    var obj = document.getElementById('julKalender' + results.data[a][0]);
                        obj.setAttribute('class', 'jul-kalender active');
                        obj.setAttribute('onclick', 'julkalenderModal("' + results.data[a][2] + '", "' + results.data[a][1] + '", "' + results.data[a][3] + '", "' + results.data[a][4] + '", "' + results.data[a][0] + '");');
                        if(getParameterByName('lucka') == results.data[a][0]){
                            julkalenderModal(results.data[a][2], results.data[a][1], results.data[a][3], results.data[a][4], results.data[a][0]);
                        };
                };
            };
        };
    }
});
function julkalenderModal(text, datum, ref, href, num){
    document.getElementById('kalender-datum').innerText = datum;
    document.getElementById('kalender-message').innerText = text;
    var social = ['linkedin', 'facebook', 'twitter'];
    for (let i = 0; i < social.length; i++) {
        var element = document.getElementById(social[i] + '-modal');
        element.setAttribute('href', element.getAttribute('href').split('?lucka')[0] + '?lucka=' + num);
    };
    var objRef = document.getElementById('kalender-reference');
        removeElements(objRef);
        if(!href || href == '' ){
            var linkT = document.createTextNode(ref);
            objRef.appendChild(linkT);
        }else{
            var link = document.createElement('a');
                link.setAttribute('href', href);
                link.setAttribute('target', '_blank');
                link.setAttribute('alt', 'Länk till referens av citat');
                var linkT = document.createTextNode(ref);
                link.appendChild(linkT);
            objRef.appendChild(link);
        };
    oppnaModal('julkalenderModal');
};