function button() {
    let Celsius = document.getElementById("OC").value;
    let C = parseInt(Celsius);
    let F = 9*(C/5)+32;
    document.write("Độ F:" +F);
}

