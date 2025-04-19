# Gunakan image dasar Node.js
FROM node:18

# Buat folder kerja di container
WORKDIR /app

# Salin file package.json dan install dependensi
COPY package*.json ./
RUN npm install

# Salin seluruh source code
COPY . .

# Aplikasi akan berjalan di port 5000
EXPOSE 5000

# Jalankan aplikasi
CMD ["node", "index.js"]
