function setAlert() {
    let intervalid = 0;
    intervalid = setInterval(function() {
        const isBreak = confirm("พักสายตาสักครู่ คุณต้องการหยุดการแจ้งเตือนนี้หรือไม่?");
        if (isBreak) {
            clearInterval(intervalid);
            alert("พักสายตาแล้วนะ");
        }
    }, 120 * 1000);
}