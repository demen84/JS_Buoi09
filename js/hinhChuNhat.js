/*
* Đầu vào:
- Nhập vào chiều rộng và chiều dài của hình chữ nhật
*Xử lý:
- Diện tích = chiều dài * chiều rộng
- Chu vi = (chiều dài + chiều rộng) * 2
* Đầu ra:
- Xuất ra màn hình giá trị diện tích và chu vi của hinh chữ nhật
*/

let hamHinhChuNhat = document.getElementById("btnTinhtoan"); // Lấy nút tính diện tích và chu vi hình chữ nhật
hamHinhChuNhat.onclick = function() {
    //Test xem có gọi đc sự kiện onclick không
    // alert("Đã tính");
    //Khai báo biến chiều dài và chiều rộng
    let chieuDai = document.getElementById("chieuDai").value; // Chiều dài
    let chieuRong = document.getElementById("chieuRong").value; // Chiều rộng

    //Xử lý tính diện tích và chu vi hình chữ nhật
    let dienTich = chieuDai * chieuRong; // Diện tích
    let chuVi = (Number(chieuDai) + Number(chieuRong)) * 2; // Chu vi

    //Xuất ra kết quả:
    document.getElementById("pDientich").innerHTML = dienTich.toLocaleString(); // Hiển thị diện tích
    document.getElementById("pChuvi").innerHTML = chuVi.toLocaleString();