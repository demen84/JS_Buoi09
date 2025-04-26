/*
* Đầu vào:
- Nhập vào 1 số nguyên dương có 2 chữ số
*Xử lý:
- Tính tổng 2 ký số = số nguyên dương có 2 chữ số % 10 + Math.floor(số nguyên dương có 2 chữ số / 10)
số don vi = so % 10
số chuc = so / 10
* Đầu ra:
- Xuất ra màn hình giá trị tổng 2 ký số
*/

function getTongHaiKySo() {
    //Kiểm tra xem có gọi đc sự kiện onclick không
    // alert('Tong 2 ky so');
    //Khai báo biến số nguyên dương có 2 chữ số
    let soNguyenDuong = document.getElementById("soNguyenDuong").value; // Số nguyên dương có 2 chữ số
    //Xử lý tính tổng 2 ký số
    let soDonVi = soNguyenDuong % 10; // Số đơn vị
    let soChuc = Math.floor(soNguyenDuong / 10); // Số chục
    // let soChuc = (soNguyenDuong / 10); // Số chục
    let tongHaiKySo = Number(soDonVi) + Number(soChuc); // Tổng 2 ký số
    //Xuất ra kết quả:
    document.getElementById("pTongKySo").innerHTML = tongHaiKySo;
}