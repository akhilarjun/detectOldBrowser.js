function get_browser(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE',version:(tem[1]||'')};
    }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/);
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
    }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
};

var minimum = {
    IE : 11,
    CHROME : 50,
    FIREFOX : 46,
    SAFARI : 5,
    OPERA : 37
};

var isBrowserOld = function(){
    var currentBrowser = get_browser();
    if(currentBrowser.name.toLowerCase() == 'msie'){
        currentBrowser.name = 'ie';
    }
    for(key in minimum){
        if(key == currentBrowser.name.toUpperCase()){
            return (minimum[key] > Number(currentBrowser.version));
        }
    }
};