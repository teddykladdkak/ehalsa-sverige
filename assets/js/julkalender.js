Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vT90tUWUvDqVMGVvMKXGD55BTDUa--DnjBSWoYKyUF9QCs-YNumse-c2NBjdMTL2ZNfHZt7h2kNlPyN/pub?output=csv", {
    download: true,
    error: function(results) {
        console.log('Något gick fel');
    },
    complete: function(results) {
        for (var a = 0; a < results.data.length; a++){
            if(results.data[a][0] == 'ID'){}else{
                if(results.data[a][5] == 'TRUE'){
                    var obj = document.getElementById('julKalender' + results.data[a][0]);
                        obj.setAttribute('class', 'jul-kalender active');
                        obj.setAttribute('onclick', 'modal("' + results.data[a][2] + '", "' + results.data[a][1] + '", "' + results.data[a][3] + '", "' + results.data[a][4] + '");');
                        if(getParameterByName('julkalender') == results.data[a][0]){
                            modal(results.data[a][2], results.data[a][1], results.data[a][3], results.data[a][4]);
                        };
                };
            };
        };
    }
});
function modal(text, datum, ref, href){
    document.getElementById('kalender-datum').innerText = datum;
    document.getElementById('kalender-message').innerText = text;
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
    document.getElementById("myModal").style.display = "block";        
};
function stangModal(){
    document.getElementById("myModal").style.display = "none";
};
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}