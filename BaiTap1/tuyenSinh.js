function tinhDiem() {
  var diemChuanValue = document.getElementById("diemChuan").value * 1;
  var diemToanValue = document.getElementById("diemToan").value * 1;
  var diemLyValue = document.getElementById("diemLy").value * 1;
  var diemHoaValue = document.getElementById("diemHoa").value * 1;
  var diemKhuVuc = document.getElementById("khuVuc").value * 1;
  var diemDoiTuong = document.getElementById("doiTuong").value * 1;
  if (
    kiemTraDiem(
      diemChuanValue,
      diemToanValue,
      diemLyValue,
      diemHoaValue,
      diemKhuVuc,
      diemDoiTuong
    )
  ) {
    var kiemTraDau = xepLoai(
      diemChuanValue,
      diemToanValue,
      diemLyValue,
      diemHoaValue,
      diemKhuVuc,
      diemDoiTuong
    );
    if (kiemTraDau) {
      document.getElementById("ketQua").innerText = "Đậu";
      document.getElementById("tongDiem").innerText =
        diemToanValue + diemLyValue + diemHoaValue + diemDoiTuong + diemKhuVuc;
      document.getElementById("showKetQua").style.display = "block";
    } else {
      document.getElementById("ketQua").innerText = "Rớt";
      document.getElementById("tongDiem").innerText =
        diemToanValue + diemLyValue + diemHoaValue + diemDoiTuong + diemKhuVuc;
      document.getElementById("showKetQua").style.display = "block";
    }
  } else {
    alert(
      "Vui lòng nhập số điểm, điểm chuẩn và chọn đối tượng, khu vực hợp lệ"
    );
  }
}
function xepLoai(_diemChuan, _toan, _ly, _hoa, _khuVuc, _doiTuong) {
  if (_toan === 0 || _ly === 0 || _hoa === 0) {
    return false;
  } else {
    var tongDiem = _toan + _ly + _hoa + _khuVuc + _doiTuong;
    if (tongDiem >= _diemChuan) {
      return true;
    } else {
      return false;
    }
  }
}
function kiemTraDiem(_diemChuan, _toan, _ly, _hoa, _khuVuc, _doiTuong) {
  if (
    Number.isNaN(_diemChuan) ||
    Number.isNaN(_toan) ||
    Number.isNaN(_ly) ||
    Number.isNaN(_hoa) ||
    Number.isNaN(_khuVuc) ||
    Number.isNaN(_doiTuong)
  )
    return false;
  else {
    if (
      _diemChuan < 0 ||
      _diemChuan > 30 ||
      _toan < 0 ||
      _toan > 10 ||
      _ly < 0 ||
      _ly > 10 ||
      _hoa < 0 ||
      _hoa > 10
    ) {
      return false;
    }
    return true;
  }
}
