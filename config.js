// ===== عدّل هون: بيانات Firebase (من لوحة Firebase ← إعدادات المشروع) =====
const firebaseConfig = {
  apiKey: "AIzaSyBlyhMLILhHlVybtb8yDwd3odLI3ay3nR0",
  authDomain: "khedni-eb849.firebaseapp.com",
  projectId: "khedni-eb849",
  storageBucket: "khedni-eb849.firebasestorage.app",
  messagingSenderId: "413010727772",
  appId: "1:413010727772:web:4c603f0c972f95097ce799"
};
// ===== التسعيرة =====
const PRICING = { base: 5000, perKm: 2500, currency: "ل.س" };
// ===== رقم واتساب الإدارة (بدون +) =====
const ADMIN_WHATSAPP = "963934845767";
const fbApp = window.APP ? firebase.initializeApp(firebaseConfig, window.APP) : firebase.initializeApp(firebaseConfig);
const db = fbApp.firestore();
const auth = fbApp.auth();
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function mail(p,pre){return (pre||'')+String(p).replace(/\D/g,'').replace(/^(963|0+)/,'')+'@'+(pre?'driver.':'')+'khedni.app'}
const STATUS = {new:"بانتظار سائق",accepted:"السائق بالطريق إليك",arrived:"السائق وصل",done:"انتهت الرحلة",cancelled:"ملغاة"};
function km(a,b){const R=6371,r=x=>x*Math.PI/180,dLa=r(b.lat-a.lat),dLo=r(b.lng-a.lng);
const h=Math.sin(dLa/2)**2+Math.cos(r(a.lat))*Math.cos(r(b.lat))*Math.sin(dLo/2)**2;return 2*R*Math.asin(Math.sqrt(h))*1.3}
function price(d){return Math.round((PRICING.base+d*PRICING.perKm)/500)*500}
