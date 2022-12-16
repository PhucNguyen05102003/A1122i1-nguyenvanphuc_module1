function button() {
    let p = 3.14;
    let ban_kinh = document.getElementById("rb").value;
    let r = parseInt(ban_kinh);
    let C;
    if (r>0) {
        C =(2*r*p);
        document.write("Chu vi hình tròn :" + C);
    }else {
        document.write("Nhập lại r");
    }
    
}