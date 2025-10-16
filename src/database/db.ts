import { env } from 'process';
import mysql, { Pool, PoolOptions } from 'mysql2';

const poolOptions: PoolOptions = {
    host: env.DATABASE_HOST,
    user: env.DATABASE_USER,
    database: env.DATABASE_NAME,
    password: env.DATABASE_PASSWORD,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

const pool: Pool = mysql.createPool(poolOptions);

const query = <T>(query: string, params?: any[]): Promise<T> => {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result as T);
            }
        });
    });
};

export default query;
