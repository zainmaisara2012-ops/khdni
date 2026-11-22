// الإشعارات عبر OneSignal (مجاني). يحتاج ONESIGNAL_APP_ID من config.js
(function(){
 if(typeof ONESIGNAL_APP_ID==='undefined'||ONESIGNAL_APP_ID.indexOf('ضع')>-1)return;
 const base=location.pathname.replace(/[^/]*$/,'');
 window.OneSignalDeferred=window.OneSignalDeferred||[];
 const s=document.createElement('script');s.src='https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';s.defer=true;document.head.appendChild(s);
 window.initPush=function(role,uid){
  OneSignalDeferred.push(async function(OneSignal){
   try{
    if(!window._osInit){window._osInit=1;
     await OneSignal.init({appId:ONESIGNAL_APP_ID,serviceWorkerPath:base.slice(1)+'sw.js',serviceWorkerParam:{scope:base},notifyButton:{enable:false}})}
    await OneSignal.login(uid);OneSignal.User.addTag('role',role)
   }catch(e){console.log('push',e)}
  })};
 window.askPush=function(quiet){
  const ios=/iphone|ipad|ipod/i.test(navigator.userAgent),app=navigator.standalone||(window.matchMedia&&matchMedia('(display-mode: standalone)').matches);
  if(ios&&!app){if(!quiet)alert('على الآيفون: ثبّت التطبيق على الشاشة الرئيسية أولاً (مشاركة ← إضافة إلى الشاشة الرئيسية)، ثم افتحه منها وفعّل الإشعارات');return}
  if(typeof Notification!=='undefined'&&Notification.permission==='denied'){if(!quiet)alert('الإشعارات محظورة. فعّلها من إعدادات المتصفح ← إعدادات الموقع ← الإشعارات');return}
  OneSignalDeferred.push(async function(OneSignal){try{await OneSignal.Notifications.requestPermission()}catch(e){}})};
})();
