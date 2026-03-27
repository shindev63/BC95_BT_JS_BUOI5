function switchTab(tabId, btnElement) {
  // 1. Xử lý hiển thị nội dung
  const contents =
    document.querySelectorAll(".tab-content");
  contents.forEach((content) => {
    content.classList.add("hidden"); // Ẩn tất cả
    content.classList.remove("block");
  });

  const activeContent = document.getElementById(tabId);
  activeContent.classList.remove("hidden"); // Hiện tab được chọn
  activeContent.classList.add("block");

  // 2. Xử lý đổi màu nút (UI Sidebar)
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => {
    // Trả về trạng thái chưa chọn
    btn.classList.remove(
      "bg-blue-600",
      "text-white",
      "font-semibold",
    );
    btn.classList.add("bg-gray-50", "text-gray-600");
  });

  // Cập nhật trạng thái cho nút vừa click
  btnElement.classList.remove(
    "bg-gray-50",
    "text-gray-600",
  );
  btnElement.classList.add(
    "bg-blue-600",
    "text-white",
    "font-semibold",
  );
}
