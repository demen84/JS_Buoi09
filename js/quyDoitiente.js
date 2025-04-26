/*
* Đầu vào:
- Nhập vào số tiền USD
*Xử lý:
- Quy ra tiền VND = số tiền USD * 25.800
* Đầu ra:
- Xuất ra màn hình giá trị tiền VND
*/

let hamQuyDoiTienTe = document.getElementById("btnQuyDoi"); // Lấy nút quy đổi

hamQuyDoiTienTe.onclick = function(){
    //Test xem có gọi đc sự kiện onclick không
    // alert("Đã quy đổi tiền tệ thành công");
    //Khai báo biến số tiền USD
    let tyGiaUSD = 25800; // Tỷ giá USD
    let soTienUSD = document.getElementById("soTienUSD").value; // Số tiền USD

    //Xử lý quy đổi tiền tệ
    let quyDoiTienTe = soTienUSD * tyGiaUSD; // Quy đổi tiền tệ

    //Xuất ra kết quả:
    document.getElementById("pSoTienVND").innerHTML = quyDoiTienTe.toLocaleString();
}