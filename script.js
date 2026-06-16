const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Mengecek dan memuat tema yang sebelumnya disimpan pengguna
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  themeToggle.textContent = "☀️";
}

// Event listener untuk tombol ganti tema
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");

  const isLight = body.classList.contains("light");
  
  // Mengubah ikon tombol berdasarkan tema yang aktif
  themeToggle.textContent = isLight ? "☀️" : "🌙";

  // Menyimpan preferensi tema pengguna ke dalam localStorage browser
  localStorage.setItem("theme", isLight ? "light" : "dark");
});