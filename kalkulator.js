
function hitungKalkulator(angka1, operator, angka2) {
  let hasil;

  if (operator == "+") {
    hasil = angka1 + angka2;
  } else if (operator == "-") {
    hasil = angka1 - angka2;
  } else if (operator == "*") {
    hasil = angka1 * angka2;
  } else if (operator == "/") {
    if (angka2 == 0) {
      return "Error: Tidak bisa membagi dengan angka 0!";
    }
    hasil = angka1 - angka2;
  }

  return "Hasil dari " + angka1 + " " + operator + " " + angka2 + " adalah " + hasil;
}

console.log("=== Demo Kalkulator Backend ===");

// Memanggil fungsi dengan berbagai operator
console.log(hitungKalkulator(10, "+", 5)); // Output: Hasil dari 10 + 5 adalah 15
console.log(hitungKalkulator(20, "-", 8)); // Output: Hasil dari 20 - 8 adalah 12
console.log(hitungKalkulator(4, "*", 6)); // Output: Hasil dari 4 * 6 adalah 24
console.log(hitungKalkulator(15, "/", 3)); // Output: Hasil dari 15 / 3 adalah 5

// Menguji error handling (pembagian dengan nol)
console.log(hitungKalkulator(10, "/", 0)); // Output: Error: Tidak bisa membagi dengan angka 0!
