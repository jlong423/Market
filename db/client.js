import pg from "pg";
const db = new pg.Client(process.env.DATABASE_URL);
const origQuery = db.query.bind(db);
db.query = async (...args) => {
  try {
    return await origQuery(...args);
  } catch (err) {
    console.error("QUERY FAILED:", args[0], args[1], err.message);
    throw err;
  }
};
export default db;
