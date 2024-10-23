const pool = require('../config/dpconfig');

class ingredientsDao {
    constructor() {
        this.pool = pool;
    }

    findAllIngredients(req, res) {
        pool.query('SELECT * from ingredients', (err, rows) => {
            console.log(rows)

            res.send(rows)
        })
    }
}

module.exports = ingredientsDao;
