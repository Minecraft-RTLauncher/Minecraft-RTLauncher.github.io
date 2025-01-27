function error_1() {
  Swal.fire({
    icon: "error",
    title: "我们似乎遇到了一些问题",
    text: "请联系管理员@webPG",
    //按钮Button
    showConfirmButton: false,
    //进度框
    timerProgressBar: true,
    timer: 2500
  });
}