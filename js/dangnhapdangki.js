/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
// document.querySelector(".form-dangnhap").style.display = "none";

$(document).ready(function () {
  $.validator.addMethod(
    "complexPassword",
    function (value, element) {
      return (
        this.optional(element) ||
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(value)
      );
    },
    "Mật khẩu phải có ít nhất một chữ thường, một chữ hoa và một chữ số."
  );
  $.validator.addMethod(
    "phoneStartsWithZero",
    function (value, element) {
      return this.optional(element) || /^0\d{9}$/.test(value);
    },
    "Số điện thoại phải bắt đầu bằng số 0 và chỉ chứa các chữ số."
  );

  $("#registerForm").validate({
    rules: {
      regUsername: {
        required: true,
        minlength: 5,
      },
      regPassword: {
        required: true,
        minlength: 8,
        complexPassword: true, // Thêm kiểm tra mật khẩu phức tạp
      },
      confinPassword: {
        required: true,
        equalTo: "#regPassword", // So sánh với trường mật khẩu gốc
      },
      regNumber: {
        required: true,
        number: true,
        phoneStartsWithZero: true,
      },
      regEmail: {
        required: true,

        email: true,
      },
    },
    messages: {
      regUsername: {
        required: "Vui lòng nhập user",
        minlength: "Nhập lơn hôn 5 ki tu",
      },
      regEmail: {
        email: "Nhập email không hợp lệ",

        required: "Vui lòng nhập email",
      },
      regNumber: {
        number: "vui lòng nhập số điện thoại là số",
        required: "Vui lòng nhập sdt",
        minlength: "nhập lớn hơn 5 số",
        phoneStartsWithZero:
          "Số đầu phải là số 0 và số điện thoại phải đủ 10 chữ số",
      },

      regPassword: {
        required: "Vui lòng nhập mật khẩu",
        minlength: "Mật khẩu phải có ít nhất 8 ký tự.",
      },
      confinPassword: {
        required: "Vui lòng nhập lại mật khẩu.",
        equalTo: "Mật khẩu nhập lại không khớp với mật khẩu đã nhập.",
      },
    },

    submitHandler: function (form) {
      // some other code
      // maybe disabling submit button
      // then:
      form.preventDefault();

      alert("Đăng ký thành công!");
      document.getElementById("registerForm").reset();
      document.querySelector(".form-dangnhap").style.display = "block";
      document.querySelector(".form-dangki").style.display = "none";

      // form.submit();
    },
  });
});

// document
//   .getElementById("registerForm")
//   .addEventListener("submit", function (e) {
//     e.preventDefault();

//     const username = document.getElementById("regUsername").value;
//     const password = document.getElementById("regPassword").value;
//     const email = document.getElementById("regEmail").value;
//     const phone = document.getElementById("regNumber").value;
//     if (username && password && email && phone) {
//       localStorage.setItem("username", username);
//       localStorage.setItem("password", password);
//       localStorage.setItem("email", email);
//       localStorage.setItem("phone", phone);
//       alert("Đăng ký thành công!");
//       document.getElementById("registerForm").reset();
//       document.querySelector(".form-dangnhap").style.display = "block";
//       document.querySelector(".form-dangki").style.display = "none";
//     } else {
//       alert("Vui lòng điền đầy đủ thông tin.");
//     }
//   });

document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    const email = document.getElementById("regEmail").value;
    const phone = document.getElementById("regNumber").value;
    if (username && password && email && phone) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
      alert("Đăng ký thành công!");
      document.getElementById("registerForm").reset();
      document.querySelector(".form-dangnhap").style.display = "block";
      document.querySelector(".form-dangki").style.display = "none";
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
    window.location.href = "./../index.html"; // Chuyển hướng tới trang chủ
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng.");
  }
});
document.querySelector(".form-dangki").style.display = "none";

let chuacotaikhoan1 = document.getElementById("chuacotaikhoan");
chuacotaikhoan1.onclick = function (event) {
  // Ngăn chặn việc gửi form (để không tải lại trang)
  event.preventDefault();
  // Ẩn form đăng ký
  document.querySelector(".form-dangnhap").style.display = "none";
  // Hiển thị form đăng nhập
  document.querySelector(".form-dangki").style.display = "block";
};
