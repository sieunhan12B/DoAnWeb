document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Đăng ký thành công!");
      document.getElementById("registerForm").reset();
    } else {
      alert("Vui lòng điền đầy đủ thông tin.");
    }
  });

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    alert("Đăng nhập thành công!");
    window.location.href = "homepage.html"; // Chuyển hướng tới trang chủ
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng.");
  }
});
