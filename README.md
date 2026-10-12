# Sumbu Roastery — Katalog Kopi Specialty

Website katalog responsif untuk roastery kopi specialty. Dibangun dengan HTML, CSS, dan JavaScript murni (tanpa framework).

## Fitur
- Katalog 8 produk (single origin dan blend) dengan asal, proses, catatan rasa, tingkat sangrai, dan harga
- Filter kategori dan pencarian
- Tombol "+ Tambah" dengan notifikasi dan penghitung daftar pesanan
- Mode terang/gelap otomatis
- Layout responsif phone, tablet, dan desktop

## Struktur File
```text
sumbu-roastery/
├── index.html
├── style.css
├── script.js
├── README.md
└── img/
    ├── ss-phone.png
    ├── ss-tablet.png
    └── ss-pc.png
```

## Lampiran Responsive Breakpoint

### Phone
Navigasi tautan disembunyikan, statistik tampil 2 kolom, kartu produk tersusun satu kolom.

![Breakpoint Phone](img/ss-phone.png)

### Tablet
Hero tampil satu kolom, kartu produk tampil 2 kolom.

![Breakpoint Tablet](img/ss-tablet.png)

### Laptop/Desktop
Navigasi horizontal, hero dua kolom, kartu produk 3–4 kolom berdampingan.

![Breakpoint Laptop/Desktop](img/ss-pc.png)

## Cara Menjalankan
Buka `index.html` di browser. Ambil screenshot tiap ukuran layar lewat DevTools (Ctrl+Shift+M) dan simpan di folder `img/` dengan nama di atas.

## Foto Produk
Letakkan foto di `img/produk/` dengan nama berikut (format .jpg). Jika file tidak ada, kartu otomatis memakai ilustrasi biji kopi.

```text
img/produk/
├── mandailing-lintong.jpg
├── gayo-wine-natural.jpg
├── toraja-sapan.jpg
├── kintamani-honey.jpg
├── flores-bajawa.jpg
├── java-preanger.jpg
├── medan-morning-blend.jpg
└── espresso-rumah.jpg
```

Sumber foto gratis: Unsplash, Pexels, Pixabay (cek lisensi dan cantumkan kredit bila diperlukan).
