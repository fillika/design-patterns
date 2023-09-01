class SQLQueryBuilder {
    constructor() {
        this.query = '';
    }

    select(fields) {
        this.query += `SELECT ${fields} `;
        return this;
    }

    from(table) {
        this.query += `FROM ${table} `;
        return this;
    }

    where(condition) {
        this.query += `WHERE ${condition} `;
        return this;
    }

    orderBy(field) {
        this.query += `ORDER BY ${field} `;
        return this;
    }

    build() {
        return this.query.trim();
    }
}

// Usage
const query = new SQLQueryBuilder()
    .select('name, age')
    .from('users')
    .where('age > 18')
    .orderBy('age')
    .build();

console.log(query);
