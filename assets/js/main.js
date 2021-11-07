function getParameterByName(name) {var url = window.location.href;name = name.replace(/[\[\]]/g, '\\$&');var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),results = regex.exec(url);if (!results) return null;if (!results[2]) return '';return decodeURIComponent(results[2].replace(/\+/g, ' '));};
function minDate(date){return parseInt(date.split('-')[2]) + '/' + parseInt(date.split('-')[1]);};
function removeElements(el){while (el.firstChild) {el.removeChild(el.lastChild);};};
function removeElement(id){var el = document.getElementById(id);el.parentElement.removeChild(el);};
function hideElement(id){document.getElementById(id).removeAttribute('style');};
function addZero(num){if(num.split('').length == 1){return '0' + num;}else{return num;};};
function showHideMenu(el, event){var wrapper = document.getElementById('mainMenu');var icon = el.getElementsByTagName('path')[0];if(!wrapper.getAttribute('style')){wrapper.setAttribute('style', 'display: flex;');icon.setAttribute('d', 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z');}else{hideElement('mainMenu');icon.setAttribute('d', 'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z');};event.preventDefault();return false;};
function monthText(month){return month.replace('12', 'dec').replace('11', 'nov').replace('10', 'okt').replace('09', 'sep').replace('08', 'aug').replace('07', 'jul').replace('06', 'jun').replace('05', 'maj').replace('04', 'apr').replace('03', 'mar').replace('02', 'feb').replace('01', 'jan');};
function checkPassed(v){var s = v.split('-');var d = new Date(s[0], parseInt(s[1])-1, parseInt(s[2]), 8, 0, 0, 0);var t = new Date();if(d.getTime() > t.getTime()){return true;}else{return false;};};
function dateInPast(firstDate, secondDate){if(!secondDate || secondDate == ''){var secondDate = new Date();}else{var secondDate = new Date(secondDate);};var firstDate = new Date(firstDate);if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {return true;}else{return false;};};
function dateFormat(date){return date.getFullYear() + '-' + addZero((date.getMonth() + 1).toString()) + '-' + addZero(date.getDate().toString())};
function oppnaModal(id){document.getElementById(id).style.display = "block";};
function stangModal(){var modal = document.getElementsByClassName("modal");for (let i = 0; i < modal.length; i++) {modal[i].style.display = "none";};};
window.onclick = function(event) {
    var modal = document.getElementsByClassName("modal");for (let i = 0; i < modal.length; i++) {if (event.target == modal[i]) {stangModal();};};
};
window.addEventListener("load", function(){
    if(!getParameterByName('snow')){}else{document.getElementsByTagName('body')[0].setAttribute('id','snow');};
});