/**
 * 1. Xử lý ẩn hiện ô nhập số kết nối (Onchange)
 */
function handleOnchange() {
  const loaiKH =
    document.getElementById("loaiKhachHang").value;
  const groupKetNoi =
    document.getElementById("groupKetNoi");

  if (loaiKH === "company") {
    groupKetNoi.classList.remove("hidden");
  } else {
    groupKetNoi.classList.add("hidden");
    // Reset giá trị về 0 nếu người dùng đổi lại sang Nhà dân
    document.getElementById("soKetNoi").value = "";
  }
}

/**
 * 2. Tính toán tiền cáp
 */
document.getElementById("btnTinhTienCap").onclick =
  function () {
    const loaiKH =
      document.getElementById("loaiKhachHang").value;
    const maKH =
      document.getElementById("maKhachHang").value;
    const soKenh = Number(
      document.getElementById("soKenh").value,
    );
    const soKetNoi = Number(
      document.getElementById("soKetNoi").value,
    );

    const resultArea = document.getElementById("resultCap");
    const txtKetQua = document.getElementById("txtTienCap");

    if (!loaiKH) {
      alert("Vui lòng chọn loại khách hàng!");
      return;
    }

    let tongTien = 0;

    if (loaiKH === "user") {
      // Nhà dân: 4.5 (hóa đơn) + 20.5 (dịch vụ) + kenh * 7.5
      tongTien = 4.5 + 20.5 + soKenh * 7.5;
    } else {
      // Doanh nghiệp
      const phiHoaDon = 15;
      const phiKenh = soKenh * 50;
      let phiDichVu = 75; // 10 kết nối đầu

      if (soKetNoi > 10) {
        phiDichVu += (soKetNoi - 10) * 5;
      }

      tongTien = phiHoaDon + phiDichVu + phiKenh;
    }

    // Hiển thị kết quả định dạng USD
    const formatUSD = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(tongTien);

    resultArea.classList.remove("hidden");
    txtKetQua.innerHTML = `Mã khách hàng: <b>${maKH}</b>; Tiền cáp: <b class="text-indigo-600">${formatUSD}</b>`;
  };
