//TODO IMPORT OUR MYSQL POOL CONNECTION

const pool = require('../config/dpconfig');

class allergensDao {
    constructor() {
        this.pool = pool;
    }

    findAllAllergens(req, res) {
        pool.query('SELECT * from allergens', (err, rows) => {
            console.log(rows)

            res.send(rows)
        }) 
    }
};

module.exports = allergensDao;