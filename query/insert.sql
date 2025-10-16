INSERT INTO
    divisi (name, leader)
VALUES
    (
        'Komunikasi dan Informasi',
        'Muhammad Surya Duta Al-Amin'
    );

INSERT INTO
    divisi (name, leader)
VALUES
    ('Internasionalisasi', 'Muhammad Ilhamsyah Asyari');

INSERT INTO
    divisi (name, leader)
VALUES
    ('Pendidikan', 'Muhammad Fajar Wahyu Pratama');

INSERT INTO
    divisi (name, leader)
VALUES
    ('Lingkungan Hidup', 'Diana Saputri');

INSERT INTO
    divisi (name, leader)
VALUES
    (
        'Pengabdian Masyarakat',
        'Giza Fatimatus Ghiffania'
    );

INSERT INTO
    divisi (name, leader)
VALUES
    ('Kewirausahaan', 'Hernanda Bagus Hanafi');

-- Kepengurusan Utama
INSERT INTO
    anggota (name, jabatan)
VALUES
    ('Abie Nur Budi Pangestiko', 'Ketua'),
    ('Tedi Fatur Rohman', 'Wakil Ketua'),
    ('Junaidi Rio Syamsudin', 'Sekertaris 1'),
    ('Neza Firsty Ananda', 'Sekertaris 2'),
    ('Reynaldi Surya Satria', 'Bendahara 1'),
    ('Adam Amirul Insan Subroto', 'Bendahara 2');

-- Divisi Kominfo
INSERT INTO
    anggota (name, jabatan, divisi_id)
VALUES
    (
        'Muhammad Surya Duta Al-Amin',
        'Chief Operating Officer',
        1
    ),
    ('Abya Bahari Wafdulloh S', 'anggota', 1),
    ('Amandatul Mauliya Agustina', 'anggota', 1),
    ('Mayang Angelina', 'anggota', 1),
    ('Eclesianetha Ayu Pasha', 'anggota', 1),
    ('Nola Rahma Alhamda', 'anggota', 1),
    ('Zulia Nur Farida', 'anggota', 1);

-- Divisi Pendidikan
INSERT INTO
    anggota (name, jabatan, divisi_id)
VALUES
    (
        'Muhammad Fajar Wahyu Pratama',
        'Chief Operating Officer',
        3
    ),
    ('Akbar Ali Arbai', 'anggota', 3),
    ('Della Aprillia Sari', 'anggota', 3),
    ('Vanessa Wida Anggraeni', 'anggota', 3),
    ('Willy Harisyah Putra', 'anggota', 3),
    ('Yunda Amelia Putri', 'anggota', 3),
    ('M Rasyid Abdul Zacky', 'anggota', 3);

--Divisi Internasionalisasi
INSERT INTO
    anggota (name, jabatan, divisi_id)
VALUES
    (
        'Muhammad Ilhamsyah Asyari',
        'Chief Operating Officer',
        2
    ),
    ('Ajeng Nur Putri Rahayu', 'anggota', 2),
    ('Atika Dwi Lestari', 'anggota', 2),
    (
        'Dayegha Feruziarya Putri Abelgissabella',
        'anggota',
        2
    ),
    ('Deraya Shasa Isyaka', 'anggota', 2),
    ('Tasya Putri Abidtya', 'anggota', 2),
    ('Zayyan Nuri Hidayati', 'anggota', 2),
    ('Feriska Nofita Ramadhani', 'anggota', 2);

--Divisi Lingkungan Hidup
INSERT INTO
    anggota (name, jabatan, divisi_id)
VALUES
    ('Diana Saputri', 'Chief Operating Officer', 4),
    ('Moch. Bagas Asrofi', 'anggota', 4),
    ('Ferdina Oktaviani Putri', 'anggota', 4),
    ('Rania Insyira Munawar', 'anggota', 4),
    ('Riski Slamet Hartanto', 'anggota', 4),
    ('Surya Adi Winata Fatah', 'anggota', 4),
    ('Tedy Wijaya', 'anggota', 4),
    ('Muhammad Wahyu Afandi', 'anggota', 4);

--Divisi pengabdian masyarakat
INSERT INTO
    anggota (name, jabatan, divisi_id)
VALUES
    (
        'Giza Fatimatus Ghiffania',
        'Chief Operating Officer',
        5
    ),
    (
        'Amrina Shalsabila Dzaktrin Al Arasyi',
        'anggota',
        5
    ),
    ('Dimas Tri Kurniawan', 'anggota', 5),
    ('Ficha Adeliana', 'anggota', 5),
    ('Nadia Neila Rosyida', 'anggota', 5),
    ('Rara Ratu Pingkan Fransiska', 'anggota', 5),
    ('Yosua Putra Marsando', 'anggota', 5);

--Divisi Kewirausahaan
INSERT INTO
    anggota (name, jabatan, divisi_id)
VALUES
    (
        'Hernanda Bagus Hanafi',
        'Chief Operating Officer',
        6
    ),
    ('Aisyah Mawadah Warohmah', 'anggota', 6),
    ('Aulia Putri Wulandari', 'anggota', 6),
    ('Fatimah Nur Nisa', 'anggota', 6),
    ('Silvia Devitasari', 'anggota', 6),
    ('Silvia Cantrika Sari', 'anggota', 6),
    ('Muhammad Abu Al Khoir Zaki Badawi', 'anggota', 6);

INSERT INTO
    news (
        title,
        description,
        slug,
        content,
        author,
        meta_title,
        meta_description,
        meta_keywords,
        category
    )
VALUES
    (
        'Government Announces New Policy Changes',
        'The government has announced significant changes to current policies to improve the economy and welfare.',
        'government-announces-new-policy-changes',
        'The latest policy changes focus on tax reforms, healthcare, and education. These policies are expected to bring positive impacts in the coming months.',
        1,
        'Government Policy Update',
        'Details about the new government policy changes.',
        'politics, government, policy, reform',
        'Politics'
    ),
    (
        'Breakthrough AI Technology Revolutionizes Healthcare',
        'A leading tech company has unveiled an AI-based solution to assist doctors in diagnosis and treatment planning.',
        'breakthrough-ai-technology-healthcare',
        'The technology leverages machine learning to identify diseases faster and more accurately, transforming healthcare as we know it.',
        2,
        'AI Revolution in Healthcare',
        'How AI technology is changing the healthcare industry.',
        'technology, healthcare, AI, innovation',
        'Technology'
    ),
    (
        'National Team Secures Victory in World Cup Finals',
        'The national football team has won the World Cup after a thrilling match against their rivals.',
        'national-team-secures-victory-world-cup',
        'The team’s performance was outstanding, with a decisive goal in the final minutes securing their victory.',
        3,
        'Historic World Cup Win',
        'National team celebrates a historic World Cup victory.',
        'sports, football, world cup, victory',
        'Sports'
    ),
    (
        'Celebrity Couple Ties the Knot in Lavish Ceremony',
        'A famous celebrity couple has officially tied the knot in a star-studded event attended by hundreds of guests.',
        'celebrity-couple-ties-the-knot',
        'The wedding was held at a luxury resort, featuring stunning decorations and performances by top artists.',
        4,
        'Celebrity Wedding Event',
        'Details about the luxurious wedding of the celebrity couple.',
        'entertainment, wedding, celebrity, event',
        'Entertainment'
    ),
    (
        'Stock Market Hits Record High Amid Economic Growth',
        'The stock market reached an all-time high today as investors remain optimistic about the country’s economic growth.',
        'stock-market-hits-record-high',
        'Experts attribute this growth to strong corporate earnings and improved global trade relations.',
        5,
        'Stock Market Peaks',
        'Stock market reaches new heights amid economic optimism.',
        'finance, stock market, economy, growth',
        'Finance'
    );