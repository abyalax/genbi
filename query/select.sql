SELECT
    news.*,
    anggota.name AS author_name
FROM
    news
    INNER JOIN anggota ON news.author = anggota.id
WHERE
    news.id = ?;

SELECT
    (
        SELECT
            name
        FROM
            anggota
        WHERE
            divisi_id = 1
            AND jabatan = 'Chief Operating Officer'
    ) AS ketua,
    JSON_ARRAYAGG (name) AS anggota
FROM
    anggota
WHERE
    divisi_id = 1
    AND jabatan != 'Chief Operating Officer';