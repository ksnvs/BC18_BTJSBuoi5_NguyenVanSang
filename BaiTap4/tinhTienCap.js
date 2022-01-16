var radioInputEl = document.getElementById("radioInput");
var inputsEl = radioInputEl.getElementsByTagName("input");
var soKetNoiGroupEl = document.getElementById("soKetNoiGroup");
var loaiKH = "nhaDan";
var phiXuLyHoaDon = 0;
var phiDichVuCoBan = 0;
var phiDichVuCoBanThem = 0;
var phiThueKenhCaoCap = 0;
var tongTienPhi = 0;

function tinhTienCap() {
  var MaKH = document.getElementById("txtMaKH").value;
  var soKenh = document.getElementById("txtSoKenhCaoCap").value * 1;
  var soKetNoi = document.getElementById("txtSoKetNoi").value * 1;
  tinhTienPhiDichVu(loaiKH);
  if (!kiemTraMaKH(MaKH) || !kiemTraSoKenh(soKenh)) {
    alert("Vui lòng nhập Mã Khách Hàng và Số kênh hợp lệ");
    return;
  }
  if (loaiKH === "nhaDan") {
    tongTienPhi = tinhTien(1, soKenh);
    document.getElementById("loaiKH").innerText = "Nhà Dân";
  } else {
    tongTienPhi = tinhTien(soKetNoi, soKenh);
    document.getElementById("loaiKH").innerText = "Doanh Nghiệp";
  }

  document.getElementById("hoaDon").style.display = "block";
  document.getElementById("maKH").innerText = MaKH;
  document.getElementById("maKH").style.fontWeight = "bold";

  document.getElementById("loaiKH").style.fontWeight = "bold";
  document.getElementById("phiXLHD").innerText =
    phiXuLyHoaDon.toLocaleString() + "$";
  document.getElementById("phiXLHD").style.fontWeight = "bold";
  document.getElementById("phiDVCB").innerText =
    phiDichVuCoBan.toLocaleString() + "$";
  document.getElementById("phiDVCB").style.fontWeight = "bold";
  document.getElementById("phiTKCC").innerText =
    phiThueKenhCaoCap.toLocaleString() + "$";
  document.getElementById("phiTKCC").style.fontWeight = "bold";
  document.getElementById("tongTienCap").innerText =
    tongTienPhi.toLocaleString() + "$";
  document.getElementById("tongTienCap").style.fontWeight = "bold";
  console.log({ tongTienPhi });
}

function kiemTraMaKH(MaKH) {
  if (MaKH === "") {
    return false;
  }
  return true;
}

function kiemTraSoKetNoi(soKN) {
  if (!Number.isInteger(soKN) || soKN < 0) {
    return false;
  }
  return true;
}

function kiemTraSoKenh(soKenh) {
  if (!Number.isInteger(soKenh) || soKenh < 0) {
    return false;
  }
  return true;
}
function tinhTien(soKetNoi, soKenh) {
  var tongTien = 0;
  if (soKetNoi <= 10) {
    phiDichVuCoBan = phiDichVuCoBan * soKetNoi;
    phiThueKenhCaoCap = phiThueKenhCaoCap * soKenh;
    tongTien = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
  } else {
    phiDichVuCoBan = phiDichVuCoBan * 10 + (soKetNoi - 10) * phiDichVuCoBanThem;
    phiThueKenhCaoCap = phiThueKenhCaoCap * soKenh;
    tongTien = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
  }
  return tongTien;
}

function tinhTienPhiDichVu(loaiKH) {
  if (loaiKH === "nhaDan") {
    phiXuLyHoaDon = 4.5;
    phiDichVuCoBan = 20.5;
    phiDichVuCoBanThem = 0;
    phiThueKenhCaoCap = 7.5;
  } else {
    phiXuLyHoaDon = 15;
    phiDichVuCoBan = 75;
    phiDichVuCoBanThem = 5;
    phiThueKenhCaoCap = 50;
  }
}

var prev = null;
for (var i = 0; i < inputsEl.length; i++) {
  inputsEl[i].addEventListener("change", function () {
    prev ? prev.value : null;
    if (this !== prev) {
      prev = this;
    }

    switch (prev.value) {
      case "nhaDan":
        soKetNoiGroupEl.style.visibility = "hidden";
        break;
      case "doanhNghiep":
        soKetNoiGroupEl.style.visibility = "visible";
        break;
      default:
        soKetNoiGroupEl.style.visibility = "hidden";
    }
    loaiKH = prev.value;
  });
}
