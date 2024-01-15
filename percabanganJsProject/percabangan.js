function cariNilaiTerbesar() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  if (a > b && a > c) {
    document.getElementById("result-n").innerText =
      a + " adalah Nilai terbesar";
  } else if (b > a && b > c) {
    document.getElementById("result-n").innerText =
      b + " adalah Nilai terbesar";
  } else if (c > a && c > b) {
    document.getElementById("result-n").innerText =
      c + " adalah Nilai terbesar";
  } else if (a === b && b === c) {
    document.getElementById("result-n").innerText =
      "Nilai yang anda masukkan sama";
  } else if (a === b || b === c) {
    document.getElementById("result-n").innerText = "Nilai Tidak Valid";
  }
}

function refresh_N() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
  document.getElementById("result-n").innerText = "";
}

//////////////////////////////////////////////////////

function cekAngka() {
  let nilai = document.getElementById("inpNilai").value;

  if (nilai % 2 === 0 && nilai > 0) {
    document.getElementById("result-g").innerText =
      "Nilai yang anda masukan: " + nilai + " adalah Genap (Positif)";
  } else if (nilai % 2 === 0 && nilai < 0) {
    document.getElementById("result-g").innerText =
      "Nilai yang anda masukan: " + nilai + " adalah Genap (Negatif)";
  } else if (nilai % 2 === 1) {
    document.getElementById("result-g").innerText =
      "Nilai yang anda masukan: " + nilai + " adalah Ganjil (Positif)";
  } else if (nilai % 2 === -1 && nilai < 0) {
    document.getElementById("result-g").innerText =
      "Nilai yang anda masukan: " + nilai + " adalah Ganjil (Negatif)";
  } else {
    document.getElementById("result-g").innerText =
      nilai + ": Nilai Yang Anda Masukan Tidak Valid";
  }
}

function refresh_G() {
  document.getElementById("inpNilai").value = "";
  document.getElementById("result-g").innerText = "";
}

//////////////////////////////////////////////////////

function cekOnOff() {
  let lampu = parseFloat(document.getElementById("OnOf").value);

  if (lampu === 0) {
    document.getElementById("turnLamp").src = "./img/turnoff.png";
  } else if (lampu === 1) {
    document.getElementById("turnLamp").src = "./img/turnon.png";
  } else {
    alert("Nilai Tidak Valid");
  }
}

function turnOn() {
  document.getElementById("turnLamp").src = "./img/turnon.png";
}

function turnOff() {
  document.getElementById("turnLamp").src = "./img/turnoff.png";
}

//////////////////////////////////////////////////////

let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");
let total = h1 + h2 + h3;
let diskon = total - total * 0.1;

function hitungDiskon() {
  if (total < 100000) {
    document.getElementById("result-d").textContent =
      "Harga yang harus anda bayarkan: " + total;
  } else if (total >= 100000) {
    console.log("Total yang harus dibayarkan : " + diskon);
    document.getElementById("result-d").textContent =
      "Harga yang harus anda bayarkan: " + diskon + " (Diskon 10%)";
  }
}
