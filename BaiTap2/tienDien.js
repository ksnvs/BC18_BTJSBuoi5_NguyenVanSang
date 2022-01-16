const soTien50KwDau = 500;
const soTien51Den100Kw = 650;
const soTien101Den200Kw = 850;
const soTien201Den350Kw = 1100;
const soTienTren350Kw = 1300;

function tinhTienDien() {
  var hoTen = document.getElementById("txtHoTen").value;
  var soKwDien = document.getElementById("txtKwDien").value * 1;

  if (!kiemTraTen(hoTen) || !kiemTraSoKwDien(soKwDien)) {
    alert("Vui lòng nhập Họ tên hoặc số kW điện hợp lệ");
    return;
  }
  var tongTien = tinhTien(soKwDien);
  document.getElementById("ketQua").innerHTML =
    `<div> Khách hàng: ` +
    hoTen +
    ` phải trả số tiền: ` +
    tongTien.toLocaleString() +
    ` VND</div>`;
  document.getElementById("ketQua").style.display = "block";
}

function kiemTraTen(ten) {
  if (ten === "") {
    return false;
  }
  return true;
}

function kiemTraSoKwDien(soKw) {
  if (Number.isNaN(soKw) || soKw < 0) {
    return false;
  }
  return true;
}

function tinhTien(sokW) {
  var soTienDien = 0;
  if (sokW > 350) {
    soTienDien =
      50 * soTien50KwDau +
      50 * soTien51Den100Kw +
      100 * soTien101Den200Kw +
      150 * soTien201Den350Kw +
      (sokW - 350) * soTienTren350Kw;
  } else if (sokW > 200) {
    soTienDien =
      50 * soTien50KwDau +
      50 * soTien51Den100Kw +
      100 * soTien101Den200Kw +
      (sokW - 200) * soTien201Den350Kw;
  } else if (sokW > 100) {
    soTienDien =
      50 * soTien50KwDau +
      50 * soTien51Den100Kw +
      (sokW - 100) * soTien101Den200Kw;
  } else if (sokW > 50) {
    soTienDien = 50 * soTien50KwDau + (sokW - 50) * soTien51Den100Kw;
  } else {
    soTienDien = sokW * soTien50KwDau;
  }
  return soTienDien;
}
