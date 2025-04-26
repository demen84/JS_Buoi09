/*
* Đầu vào:
- Nhập vào 5 số thực
*Xử lý:
- Tính trung bình cộng = (a + b + c + d + e) / 5
* Đầu ra:
- Xuất ra màn hình giá trị trung bình cộng
*/

let hamTrungBinh = document.getElementById("btnTrungBinh"); // Lấy nút tính 
// trung bình
hamTrungBinh.onclick = function(){
    //Test xem có gọi đc sự kiện onclick không
    //alert("Đã tính trung bình cộng thành công");
    //Khai báo biến 5 số thực
    let soThuc1 = document.getElementById("so1").value; // Số thực 1
    let soThuc2 = document.getElementById("so2").value; // Số thực 2
    let soThuc3 = document.getElementById("so3").value; // Số thực 3
    let soThuc4 = document.getElementById("so4").value; // Số thực 4
    let soThuc5 = document.getElementById("so5").value; // Số thực 5

    //Xử lý tính trung bình cộng
    let trungBinhCong = (Number(soThuc1) + Number(soThuc2) + Number(soThuc3) + Number(soThuc4) + Number(soThuc5)) / 5; // Trung bình cộng

    //Xuất ra kết quả:
    document.getElementById("pGiatriTB").innerHTML = trungBinhCong;   
}