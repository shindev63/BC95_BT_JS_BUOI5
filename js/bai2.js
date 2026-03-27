document.getElementById("btnTinhTien").onclick =
  function () {
    // 1. Lấy dữ liệu
    const hoTen = document.getElementById("hoTen").value;
    const soKw = Number(
      document.getElementById("soKw").value,
    );

    const resultDiv = document.getElementById(
      "resultTienDien",
    );
    const txtKetQua =
      document.getElementById("txtTienDien");

    // 2. Kiểm tra tên và số kw
    if (hoTen === "" || isNaN(soKw) || soKw < 0) {
      alert(
        "Vui lòng nhập họ tên và số kw hợp lệ (không được âm)!",
      );
      return;
    }

    // 3. Tính toán theo phương pháp lũy tiến (Ladder Method)
    let tongTien = 0;

    if (soKw <= 50) {
      // Mốc 1: 0 - 50kw
      tongTien = soKw * 500;
    } else if (soKw <= 100) {
      // Mốc 2: 50kw đầu + phần vượt (50-100)
      tongTien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 200) {
      // Mốc 3: 100kw đầu + phần vượt (100-200)
      tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (soKw <= 350) {
      // Mốc 4: 200kw đầu + phần vượt (200-350)
      tongTien =
        50 * 500 +
        50 * 650 +
        100 * 850 +
        (soKw - 200) * 1100;
    } else {
      // Mốc 5: 350kw đầu + phần còn lại (>350)
      tongTien =
        50 * 500 +
        50 * 650 +
        100 * 850 +
        150 * 1100 +
        (soKw - 350) * 1300;
    }

    // 4. Định dạng tiền tệ VNĐ (ví dụ: 100.000đ)
    const formatVND = new Intl.NumberFormat("vi-VN").format(
      tongTien,
    );

    // 5. Hiển thị kết quả ra UI
    resultDiv.classList.remove("hidden");
    txtKetQua.innerHTML = `Họ tên: <b>${hoTen}</b>; Tiền điện: <b class="text-red-600">${formatVND} VNĐ</b>`;
  };
