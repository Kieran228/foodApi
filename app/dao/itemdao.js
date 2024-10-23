//TODO IMPORT OUR MYSQL POOL CONNECTION

const pool = require('../config/dpconfig');

class itemsDao {
    constructor() {
        this.pool = pool;
    }

    findAllItems(req, res) {
        pool.query('SELECT * from items', (err, rows) => {
            console.log(rows)

            res.send(rows)
        }) 
    }

    findItemAllergens(req, res) {
        pool.query('SELECT items.name AS menu_item, allergens.name AS menu_allergen FROM ((item_allergen INNER JOIN items ON item_allergen.item_id = items.id) INNER JOIN allergens ON item_allergen.allergen_id = allergens.id)', (err, rows) => {
            console.log(rows);

            res.send(rows);
        })
    }
};

module.exports = itemsDao;