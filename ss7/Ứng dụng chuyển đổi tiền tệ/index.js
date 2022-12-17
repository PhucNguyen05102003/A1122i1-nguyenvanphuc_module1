function button (){
    let A = document.getElementById("option_1").value;
    let B = document.getElementById("option_2").value;
    let C = document.getElementById("amount").value;
    if ( A == B ) {
        document.getElementById("kq").innerText = "Result:" +C ;
    }else if ( A=="USD" && B=="VND"){
        document.getElementById("kq").innerText = "Result:" +C*24500+ "VND";
    }else {
        document.getElementById("kq").innerText = "Result:" +C/24500+ "USD";
    }

    
}

