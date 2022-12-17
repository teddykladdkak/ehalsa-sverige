(function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);
function hojtar(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2940385,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
};
var sc_project=12828040; 
var sc_invisible=1; 
var sc_security="c4a98e68"; 
function addStatCounter(){
    var h = document.getElementsByTagName('head')[0];
        var s = document.createElement('script');
            s.setAttribute('type', 'text/javascript');
            s.setAttribute('src', 'https://www.statcounter.com/counter/counter.js');
            s.setAttribute('async', '');
        h.appendChild(s);
};
function laddaMixpanel(){
    console.log('Mixpanel laddas.');
    var kampanj = getParameterByName('k');
    window.mixpanel.init("b35f108b80eac00bf9bd8d654be744d1");
    var titel = document.getElementsByTagName('title')[0].innerText;
    if(!kampanj || kampanj == ''){window.mixpanel.track(titel);}else{window.mixpanel.track(titel, {'source': kampanj,});};
    hojtar(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    addStatCounter();
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
                            if(elmnt.scrollTop >= 600){
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
function tillatGDPR(){
    laddaMixpanel();
    hideElement('gdpr');
    localStorage.setItem('gdpr', 'tillat');
};
function nekaGDPR(){
    hideElement('gdpr');
    localStorage.setItem('gdpr', 'neka');
};
visaGDPR();