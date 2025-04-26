/*
* Đầu vào:
- Lương 1 ngày: 100.000 VNĐ
- Cho người dùng nhập Số ngày làm việc

* Xử lý:
- Tính lương tháng = Số ngày làm việc * Lương 1 ngày
Vd: 24 ngày làm việc * 100.000 VNĐ = 2.400.000 VNĐ
* Đầu ra:
- Lương tháng: 2.400.000 VNĐ
*/

function hamTinhLuong() {
    // Đầu vào
    let luongMotNgay = 100000; // Lương 1 ngày
    let soNgayLamViec = document.getElementById("songaylamviec").value; // Số ngày làm việc
    //Xử lý tính lương tháng
    let luongThang = soNgayLamViec * luongMotNgay; // Lương tháng
    // Đầu ra
    // let outputLuongThang = document.getElementById("pLuongThang"); // Lương tháng
    // outputLuongThang.innerText = luongThang; // Hiển thị lương tháng

    document.getElementById('pLuongThang').innerHTML = luongThang.toLocaleString();
}


