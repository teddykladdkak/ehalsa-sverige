(function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);
function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
function laddaMixpanel(){
    console.log('Mixpanel laddas.');
    var kampanj = getParameterByName('k');
    window.mixpanel.init("b35f108b80eac00bf9bd8d654be744d1");
    var titel = document.getElementsByTagName('title')[0].innerText;
    if(!kampanj || kampanj == ''){window.mixpanel.track(titel);}else{window.mixpanel.track(titel, {'source': kampanj,});};
};
function visaGDPR(){
    if (typeof localStorage !== 'undefined') {
        try {
            localStorage.setItem('feature_test', 'yes');
            if(localStorage.getItem('feature_test') === 'yes'){
                localStorage.removeItem('feature_test');
                // localStorage is enabled
                if(!localStorage.getItem('gdpr')){
                    document.getElementById('gdpr').setAttribute('style', 'display: flex;');
                    window.onscroll = function(){
                        if(!localStorage.getItem('gdpr')){
                            var elmnt = document.getElementsByTagName('html')[0];
                            if(elmnt.scrollTop >= 400){
                                tillatGDPR();
                            };
                        };
                    };
                }else{
                    if(localStorage.getItem('gdpr') == 'tillat'){
                        laddaMixpanel();
                    };
                };
            }else{
                // localStorage is disabled
            }
        }catch(e){
            // localStorage is disabled
        }
    }else{
        // localStorage is not available
    };
};
function tillatGDPR(){laddaMixpanel();document.getElementById('gdpr').removeAttribute('style');localStorage.setItem('gdpr', 'tillat');};
function nekaGDPR(){
    document.getElementById('gdpr').removeAttribute('style');
    localStorage.setItem('gdpr', 'neka');
};
visaGDPR();