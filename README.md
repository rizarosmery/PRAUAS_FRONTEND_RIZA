# Tripzap Website (Vite + React + JSX + React-Bootstrap)

Website statis Tripzap yang dirapikan, kini dibungkus dengan **Vite + React (JSX)** dan integrasi **React-Bootstrap** **tanpa mengubah tampilan**.

## Struktur
- `index.html` — halaman utama (markup/tampilan asli dipertahankan, referensi aset `./assets/...`).
- `public/assets/` — aset statis (images, css, js, vendor).
- `src/main.jsx` — entry React (JSX).
- `src/App.jsx` — komponen React (non-visual) + ekspos `ReactBootstrap`.
- `vite.config.js`, `package.json` — konfigurasi Vite/React.
- `.github/workflows/deploy.yml` — workflow GitHub Pages.

## React Bootstrap + JSX (tampilan tetap sama)
- React-Bootstrap dipakai via npm/JSX (`src/`), di-mount ke `#react-bootstrap-root` (`display:none`) sehingga **tidak mengubah tampilan**.
- **Tidak mengimpor** `bootstrap/dist/css/bootstrap.min.css` dari npm karena tema sudah memuat `public/assets/css/bootstrap.min.css`.
- Verifikasi di console browser: `window.__TRIPZAP_REACT_BOOTSTRAP__`.

## Menjalankan lokal
```bash
npm install
npm run dev
```
Buka URL yang ditampilkan (biasanya `http://localhost:5173`).

Build produksi:
```bash
npm run build
npm run preview
```

## Deploy ke GitHub (GitHub Pages)
1. Buat repository baru di GitHub (mis. `tripzap-website`) — **jangan** centang "Add a README" jika ingin push dari folder ini.
2. Di `vite.config.js`, jika memakai *project site* (`https://<user>.github.io/<repo>/`), set:
   ```js
   base: '/<nama-repo>/',
   ```
   (untuk *user/org site* `<user>.github.io`, `base` bisa `'/'`).
3. Jalankan di folder project ini:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Tripzap Vite+React+JSX"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/<NAMA-REPO>.git
   git push -u origin main
   ```
4. Di GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**. Workflow `deploy.yml` akan build & deploy otomatis.

> Catatan: butuh `git config user.name`/`user.email` yang valid untuk commit, dan akses push (login/token/SSH) ke GitHub.
