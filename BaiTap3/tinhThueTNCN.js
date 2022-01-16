const thueSuatDen60 = 0.05;
const thueSuat60Den120 = 0.1;
const thueSuat120Den210 = 0.15;
const thueSuat210Den384 = 0.2;
const thueSuat384Den624 = 0.25;
const thueSuat624Den960 = 0.3;
const thueSuatTren960 = 0.35;
const tienThue60 = 60000000;
const tienThue120 = 120000000;
const tienThue210 = 210000000;
const tienThue384 = 384000000;
const tienThue624 = 624000000;
const tienThue960 = 960000000;
const tienGiamTruBanThan = 11000000;
const tienGiamTruNPT = 3600000;

function tinhThueTNCN() {
  var hoTen = document.getElementById("txtHoTen").value;
  var tongThuNhap = document.getElementById("txtTongThuNhap").value * 1;
  var soNguoiPhuThuoc = document.getElementById("txtSoNguoiPhuThuoc").value * 1;
  if (
    !kiemTraTen(hoTen) ||
    !kiemTraTTN(tongThuNhap) ||
    !kiemTraSoNPT(soNguoiPhuThuoc)
  ) {
    alert("Vui lòng nhập Họ tên, Tổng thu nhập hoặc Số người phụ thuộc hợp lệ");
    return;
  }
  var tienThue = tinhThue(tongThuNhap, soNguoiPhuThuoc);
  document.getElementById("ketQua").innerHTML =
    `<div> Số tiền thuế TNCN của ` +
    hoTen +
    ` là: ` +
    tienThue.toLocaleString() +
    ` VND</div>`;
  document.getElementById("ketQua").style.display = "block";
}

function tinhThue(tongThuNhapNam, soNPT) {
  var thuNhapChiuThue =
    tongThuNhapNam - tienGiamTruBanThan - soNPT * tienGiamTruNPT;
  var thueTNCN = 0;

  if (thuNhapChiuThue <= tienThue60) {
    thueTNCN = thuNhapChiuThue * thueSuatDen60;
  } else if (thuNhapChiuThue <= tienThue120) {
    thueTNCN =
      tienThue60 * thueSuatDen60 +
      (thuNhapChiuThue - tienThue60) * thueSuat60Den120;
  } else if (thuNhapChiuThue <= tienThue210) {
    thueTNCN =
      tienThue60 * thueSuatDen60 +
      (tienThue120 - tienThue60) * thueSuat60Den120 +
      (thuNhapChiuThue - tienThue120) * thueSuat120Den210;
  } else if (thuNhapChiuThue <= tienThue384) {
    thueTNCN =
      tienThue60 * thueSuatDen60 +
      (tienThue120 - tienThue60) * thueSuat60Den120 +
      (tienThue210 - tienThue120) * thueSuat120Den210 +
      (thuNhapChiuThue - tienThue210) * thueSuat210Den384;
  } else if (thuNhapChiuThue <= tienThue624) {
    thueTNCN =
      tienThue60 * thueSuatDen60 +
      (tienThue120 - tienThue60) * thueSuat60Den120 +
      (tienThue210 - tienThue120) * thueSuat120Den210 +
      (tienThue384 - tienThue210) * thueSuat210Den384 +
      (thuNhapChiuThue - tienThue384) * thueSuat384Den624;
  } else if (thuNhapChiuThue <= tienThue960) {
    thueTNCN =
      tienThue60 * thueSuatDen60 +
      (tienThue120 - tienThue60) * thueSuat60Den120 +
      (tienThue210 - tienThue120) * thueSuat120Den210 +
      (tienThue384 - tienThue210) * thueSuat210Den384 +
      (tienThue624 - tienThue384) * thueSuat384Den624 +
      (thuNhapChiuThue - tienThue624) * thueSuat624Den960;
  } else {
    thueTNCN =
      tienThue60 * thueSuatDen60 +
      (tienThue120 - tienThue60) * thueSuat60Den120 +
      (tienThue210 - tienThue120) * thueSuat120Den210 +
      (tienThue384 - tienThue210) * thueSuat210Den384 +
      (tienThue624 - tienThue384) * thueSuat384Den624 +
      (tienThue960 - tienThue624) * thueSuat624Den960 +
      (thuNhapChiuThue - tienThue960) * thueSuatTren960;
  }
  return thueTNCN > 0 ? thueTNCN : 0;
}

function kiemTraTen(ten) {
  if (ten === "") {
    return false;
  }
  return true;
}

function kiemTraTTN(tongTN) {
  if (Number.isNaN(tongTN) || tongTN <= 0) {
    return false;
  }
  return true;
}

function kiemTraSoNPT(soNPT) {
  if (!Number.isInteger(soNPT) || soNPT < 0) {
    return false;
  }
  return true;
}
