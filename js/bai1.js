document.getElementById("btnKetQua").onclick = function () {
  // 1. Lấy dữ liệu từ giao diện
  const diemChuan = Number(
    document.getElementById("diemChuan").value,
  );
  const khuVuc = document.getElementById("khuVuc").value;
  const doiTuong =
    document.getElementById("doiTuong").value;
  const diem1 = Number(
    document.getElementById("diemMon1").value,
  );
  const diem2 = Number(
    document.getElementById("diemMon2").value,
  );
  const diem3 = Number(
    document.getElementById("diemMon3").value,
  );

  const resultArea = document.getElementById("resultArea");
  const txtKetQua = document.getElementById("txtKetQua");

  // 2. Tính điểm ưu tiên khu vực
  let diemKhuVuc = 0;
  switch (khuVuc) {
    case "A":
      diemKhuVuc = 2;
      break;
    case "B":
      diemKhuVuc = 1;
      break;
    case "C":
      diemKhuVuc = 0.5;
      break;
    default:
      diemKhuVuc = 0;
  }

  // 3. Tính điểm ưu tiên đối tượng
  let diemDoiTuong = 0;
  switch (doiTuong) {
    case "1":
      diemDoiTuong = 2.5;
      break;
    case "2":
      diemDoiTuong = 1.5;
      break;
    case "3":
      diemDoiTuong = 1;
      break;
    default:
      diemDoiTuong = 0;
  }

  // 4. Tính tổng điểm
  const tongDiem =
    diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;

  // 5. Xét điều kiện Đậu/Rớt
  let ketLuan = "";
  resultArea.classList.remove(
    "hidden",
    "bg-red-50",
    "border-red-500",
    "bg-green-50",
    "border-green-500",
  );

  if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
    ketLuan = `Bạn đã rớt do có môn bị điểm 0.`;
    resultArea.classList.add("bg-red-50", "border-red-500");
  } else if (tongDiem >= diemChuan) {
    ketLuan = `Bạn đã ĐẬU! Tổng điểm là: ${tongDiem}`;
    resultArea.classList.add(
      "bg-green-50",
      "border-green-500",
    );
  } else {
    ketLuan = `Bạn đã rớt. Tổng điểm (${tongDiem}) thấp hơn điểm chuẩn (${diemChuan}).`;
    resultArea.classList.add("bg-red-50", "border-red-500");
  }

  // Hiển thị kết quả
  resultArea.classList.remove("hidden");
  txtKetQua.innerHTML = `👉 ${ketLuan}`;
};
