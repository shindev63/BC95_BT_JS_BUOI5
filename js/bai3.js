document.getElementById("btnTinhThue").onclick =
  function () {
    // 1. Lấy dữ liệu
    const hoTen =
      document.getElementById("hoTenThue").value;
    const thuNhapNam = Number(
      document.getElementById("thuNhapNam").value,
    );
    const nguoiPhuThuoc = Number(
      document.getElementById("nguoiPhuThuoc").value,
    );

    const resultDiv = document.getElementById("resultThue");
    const txtKetQua = document.getElementById("txtThue");

    // 2. Tính thu nhập chịu thuế
    // Sử dụng cách viết ngắn gọn 4e6 (4 triệu) và 1.6e6 (1.6 triệu) theo đề bài
    const thuNhapChiuThue =
      thuNhapNam - 4e6 - nguoiPhuThuoc * 1.6e6;

    // Kiểm tra đầu vào
    if (!hoTen || thuNhapNam <= 0) {
      alert(
        "Vui lòng nhập đầy đủ họ tên và thu nhập hợp lệ!",
      );
      return;
    }

    if (thuNhapChiuThue <= 0) {
      alert(
        "Thu nhập của bạn chưa đến mức phải đóng thuế.",
      );
      resultDiv.classList.add("hidden");
      return;
    }

    // 3. Xác định % thuế suất (Dựa trên thu nhập chịu thuế)
    let thueSuat = 0;

    if (thuNhapChiuThue <= 60e6) {
      thueSuat = 0.05; // 5%
    } else if (thuNhapChiuThue <= 120e6) {
      thueSuat = 0.1; // 10%
    } else if (thuNhapChiuThue <= 210e6) {
      thueSuat = 0.15; // 15%
    } else if (thuNhapChiuThue <= 384e6) {
      thueSuat = 0.2; // 20%
    } else if (thuNhapChiuThue <= 624e6) {
      thueSuat = 0.25; // 25%
    } else if (thuNhapChiuThue <= 960e6) {
      thueSuat = 0.3; // 30%
    } else {
      thueSuat = 0.35; // 35%
    }

    // 4. Tính tổng tiền thuế
    const tongThue = thuNhapChiuThue * thueSuat;

    // 5. Hiển thị kết quả bằng NumberFormat
    const formatVND = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(tongThue);

    resultDiv.classList.remove("hidden");
    txtKetQua.innerHTML = `Họ tên: <b>${hoTen}</b>; Tiền thuế thu nhập cá nhân: <b class="text-red-600">${formatVND}</b>`;
  };
