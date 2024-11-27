// Langkah 1: Membeli mie
let mie = true; // Asumsi mie sudah dibeli

// Langkah 2: Menyalakan kompor
let komporMenyala = false;
let gasAda = true;
let beliGas = false;
let beliKompor = false;

if (!komporMenyala) {
  console.log("Kompor tidak mau menyala. Memeriksa masalah...");
  if (!gasAda) {
    console.log("Gas habis. Membeli gas baru...");
    beliGas = true;
    gasAda = true; // Setelah beli gas, gas tersedia
  }

  if (gasAda) {
    console.log("Gas tersedia. Coba nyalakan kompor...");
    komporMenyala = true; // Kompor bisa menyala jika gas tersedia
  }

  if (!komporMenyala) {
    console.log("Kompor rusak. Membeli kompor baru...");
    beliKompor = true;
    komporMenyala = true; // Kompor baru dipastikan menyala
  }
}

if (komporMenyala) {
  console.log("Kompor berhasil dinyalakan!");
}

// Langkah 3: Memasukkan mie ke dalam air
if (mie && komporMenyala) {
  console.log("Memasukkan mie ke dalam air...");
}

// Langkah 4: Merebus mie
if (mie && komporMenyala) {
  console.log("Merebus mie...");
}

// Langkah 5: Jika matang, siap saji
let mieMatang = true; // Asumsi mie matang setelah direbus
if (mieMatang) {
  console.log("Mie sudah matang, siap disajikan!");
}

// Langkah 6: Memakan mie
if (mieMatang) {
  console.log("Memakan mie... Selamat menikmati!");
}
