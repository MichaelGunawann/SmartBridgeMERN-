
Lab ini dibuat untuk belajar dasar React pakai JSX, mulai dari bikin component sederhana, render ke browser pakai ReactDOM, sampai build file pakai Babel.

Di lab ini saya membuat:

 Component React sederhana
 Render component ke halaman HTML
 Menampilkan data dinamis
 Menampilkan list pakai map()
 Membuat component terpisah (Item.js)

Kendala yang saya alami:
Awalnya saya cukup bingung pas setup project, terutama waktu install package, konfigurasi Babel, dan hubungan antara file di folder src, dist, sama public.
petunjuk di modul

Saya juga sempat mengalami beberapa error seperti:

 file tidak tampil di browser
 path script salah
 error module / App tidak terbaca

Setelah dicek, ternyata masalahnya ada di cara menjalankan project dan penempatan file hasil build.

Cara menjalankan project:

1. Install dependency
   npm install

2. Build project
   npm run build

3. Jalankan public/index.html pakai Live Server

Dari lab ini saya jadi lebih paham cara kerja dasar React, JSX, dan proses build menggunakan Babel.
