Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vT90tUWUvDqVMGVvMKXGD55BTDUa--DnjBSWoYKyUF9QCs-YNumse-c2NBjdMTL2ZNfHZt7h2kNlPyN/pub?output=csv", {
    download: true,
    error: function(results) {
        console.log('Något gick fel');
    },
    complete: function(results) {
        for (var a = 0; a < results.data.length; a++){
            if(results.data[a][0] == 'ID'){}else{
                if(results.data[a][2] == 'TRUE'){
                    var obj = document.getElementById('julKalender' + results.data[a][0]);
                        obj.setAttribute('class', 'jul-kalender active');
                        obj.setAttribute('onclick', 'modal("' + results.data[a][1] + '");');
                };
            };
        };
    }
});
function modal(text){
    document.getElementById('kalender-message').innerText = text;
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