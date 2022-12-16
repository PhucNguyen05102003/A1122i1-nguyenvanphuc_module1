function button() {
    let p = 3.14;
    let ban_kinh = document.getElementById("Rb").value;
    let R = parseInt(ban_kinh);
    if (R>0) {
        let S = (2*R*p);
        document.write("Diện tích hình tròn :" + S);
    }
    else {
        document.write("Nhập lại R")
    }
    
}