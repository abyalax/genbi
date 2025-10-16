
## Relationships

```
anggota -> divisi 
( many to one ) : anggota.divisi_id -> divisi.id

divisi -> anggota
( one to one ) : divisi.leader_id => anggota.id

news -> anggota 
( many to one ) : news.author -> anggota.id

agenda_participants -> agenda, anggota 
( many to one ) : agenda_id dan participants_id

agenda -> anggota 
( many to many ) : agenda_participants
```

---

## Fungsi Relationships

| Relasi A                 | Pasangan (Inverse)              | Keterangan                                            |
| ------------------------ | ------------------------------- | ----------------------------------------------------- |
| `hasOne`                 | `belongsTo`                     | One-to-One dua arah                                   |
| `hasMany`                | `belongsTo`                     | One-to-Many dua arah                                  |
| `belongsTo`              | `hasOne` / `hasMany`            | Tergantung konteks: apakah relasinya satu atau banyak |
| `belongsToMany`          | `belongsToMany`                 | Many-to-Many dua arah                                 |
| `hasManyThrough`         | ⚠️ Tidak ada pasangan eksplisit | Karena ini relasi tidak langsung                      |
| `morphOne` / `morphMany` | `morphTo`                       | Polymorphic satu ke banyak atau satu ke satu          |
| `morphTo`                | `morphOne` / `morphMany`        | Polymorphic inverse                                   |


---

## Properti Penting Model Laravel

| Properti      | Fungsi                                                                |
| ------------- | --------------------------------------------------------------------- |
| `$table`      | Override nama tabel                                                   |
| `$fillable`   | Field yang boleh di-*mass assign*                                     |
| `$guarded`    | Field yang tidak boleh di-*mass assign*                               |
| `$timestamps` | Matikan jika tidak ada `created_at` & `updated_at` di tabel           |
| `$primaryKey` | Ganti primary key default (`id`)                                      |
| `$keyType`      | Tipe primary key (`int`, `string`)                                  |
| `$incrementing` | Apakah primary key auto-increment                                   |
| `$casts`      | Otomatis casting field ke tipe tertentu (json, datetime, array, dst.) |
| `$attributes`   | Nilai default untuk kolom tertentu                                  |

