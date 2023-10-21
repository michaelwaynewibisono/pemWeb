function tampil(value) {
    let nilai = document.getElementById("kotak");
    nilai.value = nilai.value + value;
}

function hapus() {
    let kosong = document.getElementById("kotak");
    kosong.value = "";
}

function hitung() {
    let a = document.getElementById("kotak");
    let hasil = eval(a.value);
    document.getElementById("kotak").value = hasil;
}