CREATE TABLE users (
  id bigint unsigned NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  email_verified_at timestamp NULL DEFAULT NULL,
  password varchar(255) NOT NULL,
  remember_token varchar(100) DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY users_email_unique (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE password_reset_tokens (
  email varchar(255) NOT NULL,
  token varchar(255) NOT NULL,
  created_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE failed_jobs (
  id bigint unsigned NOT NULL AUTO_INCREMENT,
  uuid varchar(255) NOT NULL,
  connection text NOT NULL,
  queue text NOT NULL,
  payload longtext NOT NULL,
  exception longtext NOT NULL,
  failed_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY failed_jobs_uuid_unique (uuid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE personal_access_tokens (
  id bigint unsigned NOT NULL AUTO_INCREMENT,
  tokenable_type varchar(255) NOT NULL,
  tokenable_id bigint unsigned NOT NULL,
  name varchar(255) NOT NULL,
  token varchar(64) NOT NULL,
  abilities text,
  last_used_at timestamp NULL DEFAULT NULL,
  expires_at timestamp NULL DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY personal_access_tokens_token_unique (token),
  KEY personal_access_tokens_tokenable_type_tokenable_id_index (tokenable_type,tokenable_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE news (
  id int unsigned NOT NULL AUTO_INCREMENT,
  title varchar(100) NOT NULL,
  description text,
  slug varchar(200) NOT NULL,
  content text,
  image varchar(50) DEFAULT NULL,
  author_id int unsigned NOT NULL,
  meta_title varchar(255) DEFAULT NULL,
  meta_description varchar(255) DEFAULT NULL,
  meta_keywords varchar(100) DEFAULT NULL,
  category varchar(100) DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY news_slug_unique (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE divisi (
  id int unsigned NOT NULL AUTO_INCREMENT,
  name varchar(200) NOT NULL,
  leader_id int unsigned NOT NULL,
  visi text,
  misi text,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE anggota (
  id int unsigned NOT NULL AUTO_INCREMENT,
  name varchar(200) NOT NULL,
  email varchar(200) DEFAULT NULL,
  phone varchar(15) DEFAULT NULL,
  fakultas varchar(200) DEFAULT NULL,
  prodi varchar(200) DEFAULT NULL,
  semester int DEFAULT NULL,
  jabatan varchar(200) DEFAULT NULL,
  image varchar(100) DEFAULT NULL,
  divisi_id int unsigned DEFAULT NULL,
  status enum('active','inactive') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY anggota_email_unique (email),
  KEY anggota_divisi_id_foreign (divisi_id),
  CONSTRAINT anggota_divisi_id_foreign FOREIGN KEY (divisi_id) REFERENCES divisi (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE agenda (
  id int unsigned NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description text NOT NULL,
  location text NOT NULL,
  start datetime NOT NULL,
  end datetime NOT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE agenda_participants (
  id int unsigned NOT NULL AUTO_INCREMENT,
  agenda_id int unsigned NOT NULL,
  participant_id int unsigned NOT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  KEY agendaparticipants_agenda_id_index (agenda_id),
  KEY agendaparticipants_participant_id_index (participant_id),
  CONSTRAINT agendaparticipants_agenda_id_foreign FOREIGN KEY (agenda_id) REFERENCES agenda (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT agendaparticipants_participant_id_foreign FOREIGN KEY (participant_id) REFERENCES anggota (id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE profile (
  id bigint unsigned NOT NULL AUTO_INCREMENT,
  about_us text NOT NULL,
  visi varchar(255) NOT NULL,
  misi json NOT NULL,
  quotes json NOT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
