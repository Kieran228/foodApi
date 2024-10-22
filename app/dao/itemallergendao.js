//TODO IMPORT OUR MYSQL POOL CONNECTION

const pool = require('../config/dpconfig');

class itemAllergensDao {
    constructor() {
        this.pool = pool;
    }

    innerJoin(req, res) {
        pool.query('SELECT items.id, allergen.id FROM (items) INNER JOIN allergens ON items.id = allergens.id', (err, rows) => {
            console.log(rows)

            res.send(rows)
        })
    }
}