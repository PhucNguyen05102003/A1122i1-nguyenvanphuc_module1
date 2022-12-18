    function addition() {
        let a = + document.getElementById("points_1").value;
        let b = + document.getElementById("points_2").value;
        let c = a+b ;
        document.getElementById("result").innerText = "Result Division:" +c;
    }
    function subtraction() {
        let a = + document.getElementById("points_1").value;
        let b = + document.getElementById("points_2").value;
        let c = a-b ;
        document.getElementById("result").innerText = "Result Division:" +c; 
    }
    function multiplication() {
        let a = + document.getElementById("points_1").value;
        let b = + document.getElementById("points_2").value;
        let c = a*b ;
        document.getElementById("result").innerText = "Result Division:" +c;
    }
    function division() {
        let a = + document.getElementById("points_1").value;
        let b = + document.getElementById("points_2").value;
        let c = a/b ;
         if (a == 0 && b== 0){
            document.getElementById("result").innerText = "Result Division:" + "error";
        }else {
            document.getElementById("result").innerText = "Result Division:" +c;
        }
    }
