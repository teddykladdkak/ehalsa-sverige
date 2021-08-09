function showCategory(check){
    var allel = document.getElementsByClassName('kategori');
    if(!check){
        var id = decodeURI(window.location.hash).replace('#','');
        if(window.location.hash){
            for(let a=0;a<allel.length;a++){allel[a].removeAttribute('style');};
        }else{
            for(let a=0;a<allel.length;a++){allel[a].setAttribute('style','display: block;');};
        };
    }else{
        var id = check.getAttribute('href').split('#')[1];for(let a=0;a<allel.length;a++){allel[a].removeAttribute('style');};
    };
    if(!document.getElementById(id)){
        for(let a=0;a<allel.length;a++){allel[a].setAttribute('style','display: block;');};
    }else{
        document.getElementById(id).setAttribute('style','display: block;');
    };
};
var meny = document.getElementsByClassName('meny-kategorier');for(let i=0;i<meny.length;i++){meny[i].setAttribute('onclick', 'showCategory(this);');};
showCategory();