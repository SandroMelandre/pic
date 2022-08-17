import pgPromise from 'pg-promise'

const pg = pgPromise({});

export const db = pg("postgres://userpic:passpic@localhost:5432/pic");