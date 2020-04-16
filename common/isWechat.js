//判断是否微信登陆
export default function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
    return ua.match(/MicroMessenger/i) == 'micromessenger'
//     if (ua.match(/MicroMessenger/i) == 'micromessenger') {
//        return true;
//     } else {
//        return false;
//     }
}
