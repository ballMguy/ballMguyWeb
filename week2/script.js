const headline = document.getElementsByTagName('h1');
console.log(headline[4].innerText="หยุดพัก อาจารย์ไม่อยู่ แล้ว ไป นอน กันเถอะ");
const getByClass = document.getElementsByClassName('font-thai');
console.log(getByClass);


const c = window.confirm('ดู User languages หรือไม่?');
if (c) {
    window.alert("User agent: " + navigator.languages);
}
