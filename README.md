# Tugas Notes
![Welcome Page (Add)](https://github.com/user-attachments/assets/df75c7e8-58ff-4b73-8dcc-104799ad7a51)

Tugas Notes adalah aplikasi catatan sederhana berbasis web dengan backend menggunakan Express.js dan frontend menggunakan HTML, CSS, serta JavaScript.

## 🚀 Instalasi & Menjalankan Proyek

### **1. Clone Repository**
```command prompt
git clone https://github.com/Shinta505/notes_sederhana
cd Tugas_Notes
```

### **2. Menjalankan Backend**
Buat Database di MySQL dengan nama **notes_shinta** <br>
Kemudian Start XAMPP di bagian module MySQL

```terminal
cd backend
npm -v         # Cek versi npm
npm init -y    # Inisialisasi project Node.js
npm install mysql2 cors express sequelize  # Install dependencies utama
npm install nodemon  # Install nodemon untuk live reload
nodemon index  # Jalankan server dengan nodemon
```

### **3. Menjalankan Frontend**
Cukup buka `index.html` di browser.

## 📌 Fitur
- Tambah, edit, dan hapus catatan
- Antarmuka sederhana dan responsif
- Backend REST API dengan Express.js

## 🤝 Kontribusi
Silakan fork repository ini dan ajukan pull request untuk perbaikan atau penambahan fitur.
