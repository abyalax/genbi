# Profile and Blog CMS GenBI Organization  

## Ringkasan  
Web ini berfungsi sebagai branding organisasi penerima Beasiswa Bank Indonesia sekaligus tempat untuk platform berita, artikel tentang GenBI, dan proker yang akan serta sudah dijalankan oleh organisasi GenBI di Universitas Islam Kadiri-Kediri.  

## Latar Belakang  
### Masalah/Kebutuhan  
- Meningkatkan branding organisasi GenBI melalui website dengan optimalisasi pada search engine optimization (SEO).  
- Menyediakan platform yang terstruktur untuk menyebarkan informasi terkait GenBI kepada anggota dan masyarakat umum.  
- Memudahkan pengelolaan konten organisasi dalam satu sistem yang aman dan mudah digunakan.  

### Motivasi  
- Sebagai program kerja dari divisi Kominfo untuk melakukan branding organisasi GenBI.  
- Meningkatkan transparansi dan aksesibilitas informasi terkait kegiatan, artikel, dan agenda organisasi.  
- Mendorong digitalisasi dan modernisasi sistem informasi dalam organisasi.  

## Fitur Utama  
- **Profile organisasi GenBI**  
  Informasi tentang GenBI, termasuk sejarah, struktur organisasi, dan visi-misi.  
- **Agenda organisasi GenBI**  
  Agenda program kerja organisasi dengan tampilan kalender interaktif.  
- **Blog News, Artikel, dan Informasi kegiatan GenBI**  
  Platform untuk menyebarkan informasi, berita, dan artikel terkait GenBI.  
- **Halaman Admin GenBI dengan proteksi autentikasi**  
  Dashboard admin untuk mengelola website, termasuk manajemen artikel, agenda, dan profil organisasi.  

## Teknologi  
- **Frontend:** Next.js, Tailwind CSS  
- **Backend:** Next.js API Routes (Server Actions)  
- **Database:** PostgreSQL (Neon) dengan Prisma ORM  
- **Authentication:** Next Auth  
- **Media Storage:** Cloudinary  
- **Tools Lain:** Vercel (Deployment), GitHub (Version Control), TanStack Table (Data Table)  

### Alur Kerja  
1. Admin login melalui halaman autentikasi.  
2. Admin dapat mengelola konten seperti profil organisasi, agenda, dan blog dari dashboard.  
3. Pengunjung dapat mengakses informasi tentang GenBI melalui website.  
4. Sistem melakukan optimasi SEO agar konten lebih mudah ditemukan di mesin pencari.  

## Implementasi & Pengembangan  
### Pendekatan  
  Metodologi **Agile** dengan pendekatan **Scrum**, terdiri dari sprint dalam pengembangan fitur.  
  **Issue tracking** menggunakan GitHub Projects atau Trello untuk pengelolaan tugas.  

### Tahapan  
1. **Perencanaan**  
  Menentukan kebutuhan fitur dan merancang wireframe.  
1. **Pengembangan**  
  Membangun frontend dengan Next.js dan backend dengan API Routes.  
  Menghubungkan sistem dengan database menggunakan Prisma.  
  Mengimplementasikan autentikasi dengan NextAuth beserta session managementnya.  
1. **Pengujian**  
  Melakukan pengujian unit, integrasi, dan UI untuk memastikan fitur berjalan dengan baik.  
1. **Deployment**  
  Menggunakan Vercel untuk hosting free. Rencana web akan di hosting ikut web kampus dengan sub domain.  

### Challenges & Solusi  
- **Optimasi SEO:**  
  Menggunakan teknik server-side rendering (SSR) di Next.js untuk meningkatkan ranking di mesin pencari.  
- **Keamanan autentikasi admin:**  
  Menggunakan Next Auth untuk memastikan hanya admin yang dapat mengakses dashboard.  
- **Manajemen media (gambar, file):**  
  Menyimpan dan mengelola media menggunakan Cloudinary agar lebih efisien.  
- **Kinerja database:**  
  Menggunakan MySQL untuk manajemen data. 
 

## Arsitektur Proyek   
```
└── 📁src
    └── 📁component
        └── 📁admin
            └── __layout.tsx
            └── __routes.tsx
            └── 📁agenda
                └── create.tsx
                └── update.tsx
            └── 📁profile
                └── admin-bph.tsx
                └── bendahara-view.tsx
                └── sekretaris-view.tsx
        └── dropdown.tsx
        └── footer.tsx
        └── navbar.tsx
        └── pagination.tsx
        └── quill-content.tsx
        └── 📁table
            └── ColumnVisibility.tsx
            └── index.ts
            └── Pagination.tsx
            └── RowDetail.tsx
            └── Table.tsx
            └── Table.utils.ts
            └── TableHeader.tsx
            └── useTableData.tsx
        └── 📁ui
            └── checkbox.tsx
            └── share.tsx
            └── toaster.tsx
            └── window.tsx
    └── 📁context
        └── toaster.tsx
        └── window.tsx
    └── 📁database
        └── db.ts
    └── 📁lib
        └── axios.ts
    └── 📁middlewares
        └── auth.ts
    └── 📁pages
        └── _app.tsx
        └── _document.tsx
        └── 📁admin
            └── 📁agenda
                └── index.tsx
                └── styles.module.css
            └── 📁gallery
                └── index.tsx
            └── index.tsx
            └── 📁news
                └── [id].tsx
                └── create.tsx
                └── index.tsx
                └── 📁slug
                    └── [slug].tsx
            └── 📁profile
                └── [id].tsx
                └── index.tsx
            └── 📁settings
                └── index.tsx
        └── 📁agenda
            └── index.tsx
            └── styles.module.css
        └── 📁api
            └── 📁agenda
                └── index.ts
            └── 📁anggota
                └── index.tsx
            └── 📁auth
                └── [...nextauth].ts
            └── 📁cloudinary
                └── index.ts
            └── hello.ts
            └── 📁news
                └── index.ts
        └── 📁gallery
            └── index.tsx
        └── index.tsx
        └── 📁login
            └── index.tsx
        └── 📁news
            └── [slug].tsx
            └── index.tsx
        └── 📁profile
            └── [id].tsx
            └── 📁divisi
                └── [id].tsx
            └── index.tsx
    └── 📁services
        └── 📁agenda
            └── index.ts
        └── 📁anggota
            └── index.ts
        └── 📁auth
            └── index.ts
            └── service.ts
        └── 📁cloudinary
            └── upload.ts
        └── 📁divisi
            └── index.ts
        └── 📁news
            └── index.ts
        └── 📁pengurus
            └── index.ts
    └── 📁styles
        └── globals.css
    └── 📁utils
        └── constant.ts
        └── convert-date.ts
        └── dummy-data.ts
        └── response.ts
        └── typing.tsx
        └── utils.ts
    └── middleware.ts
```  

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Customize Full Calendar JS with class CSS

```css

/* Kelas lokal untuk membungkus FullCalendar */
.fullCalendarWrapper :global(.fc .fc-daygrid-day) {
    border: 1px solid #b6b6b6; 
}

/* Warna gelap untuk header */
.fullCalendarWrapper :global(.fc .fc-col-header-cell) {
    border-bottom: 1px solid #b6b6b6; 
}

.fullCalendarWrapper :global(.fc .fc-event) {
    color: white;
    background-color: #007bff; 
}

/* Warna toolbar dan border */

.fullCalendarWrapper :global(.fc .fc-toolbar) {
    border-bottom: 1px solid #9e9e9e; 
}

/* Font default untuk kalender */
/* Warna latar belakang */

.fullCalendarWrapper :global(.fc) {
    font-family: Arial, sans-serif; 
    background-color: #f9f9f9; 
}

/* Custom untuk toolbar */

.fullCalendarWrapper :global(.fc-toolbar) {
    background-color: #f5f5f5;
    border-bottom: 2px solid #333;
    padding: 10px;
}

/* Judul di toolbar */

.fullCalendarWrapper :global(.fc-toolbar-title) {
    font-size: 18px;
    font-weight: bold;
    color: #007bff;
}

/* Tombol navigasi di toolbar */

.fullCalendarWrapper :global(.fc-button) {
    background-color: #007bff; 
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
}

/* Tombol navigasi saat di-hover */
.fullCalendarWrapper :global(.fc-button:hover) {
    background-color: #0056b3; 
}


/* Highlight hari ini */

.fullCalendarWrapper :global(.fc-day-today) {
    background-color: #ffeb3b; 
    border: 2px solid #f57c00; 
}

/* Highlight saat memilih tanggal */
.fullCalendarWrapper :global(.fc-highlight) {
    background-color: #d1ecf1; 
}

/* Event (acara) */

.fullCalendarWrapper :global(.fc-event) {
    background-color: #4caf50;
    color: white;
    border-radius: 4px;
    padding: 5px;
    font-size: 12px;
}

/* Judul event */
.fullCalendarWrapper :global(.fc-event-title) {
    font-weight: bold;
}

/* Waktu event */
.fullCalendarWrapper :global(.fc-event-time) {
    font-style: italic;
}

/* Header kolom */

.fullCalendarWrapper :global(.fc-col-header-cell) {
    background-color: #e0e0e0; 
    border-bottom: 2px solid #333; 
    text-align: center;
    padding: 10px;
    font-weight: bold;
}

/* Scroll grid */
.fullCalendarWrapper :global(.fc-scrollgrid) {
    border: 2px solid #b6b6b6;
}

/* Warna latar belakang di akhir pekan */
.fullCalendarWrapper :global(.fc-day-sat, .fc-day-sun) {
    background-color: #f5f5f5; 
}

```
