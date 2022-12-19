
let h = +prompt('Chiều cao', "");
let w = +prompt('Cân nặng' , "");
let c = h / w * 2;
let bmi = (c < 18) ? document.write("Underweight") :
(c < 25.0) ? document.write("Normal") :
(c < 30.0) ? document.write("Overweight") :  document.write("Obese");
