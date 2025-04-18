const userName = window.prompt('คุณชื่ออะไร?');
if (userName !== null || userName !== '') {
    window.alert('สวัสดีครับ ' + userName);
}
document.getElementById('show-name').innerText = "สวัสดีครับ " + userName;

function showUserAgent() {
    const userAgent = navigator.userAgent;
    window.alert('User agent: ' + userAgent);
}

function goYoutube() {
    window.open("https://www.youtube.com/");
}
