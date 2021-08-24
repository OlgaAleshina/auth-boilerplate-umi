
export function setCookies (name, value, hourToExpire) {
    if(hourToExpire){
        let date = new Date();
        date.setTime(date.getTime()+(hourToExpire*60*60*1000));
        document.cookie = name + " = " + value + "; expires = " +date.toGMTString() + "; path=/";
    } else {
        document.cookie = name + " = " + value + "; path=/";  
    }
}

export function getCookies (name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
}