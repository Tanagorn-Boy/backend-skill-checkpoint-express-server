// Create PostgreSQL Connection Pool here !
import * as pg from "pg";
const { Pool } = pg.default;

const connectionPool = new Pool({
  connectionString:
    "postgresql://postgres:password@localhost:5432/my_backend_skill_checkpoint",
});

export default connectionPool;
