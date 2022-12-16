function Send() {
    let L = document.getElementById("physical") .value ;
    let H = document.getElementById("Chemistry") .value ;
    let S = document.getElementById("Born") .value ;
    let Lý =  parseInt(L);
    let Hóa =  parseInt(H);
    let Sinh =  parseInt(S);
    let tb = (Lý + Hóa + Sinh)/3
    document.write ("Điểm Trung Bình :" +tb)
    document.write("<br>")
    let T = (Lý + Hóa + Sinh)
    document.write ("Tổng 3 môn :" + T)
}

