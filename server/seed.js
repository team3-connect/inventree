const {sauces, funkopops} = require('./seedData.js');

const {sequelize} = require('./db');
const { Sauce, FunkoPop } = require('./models');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });

        // insert data
        await Promise.all(sauces.map(sauce => Sauce.create(sauce)));

        await Promise.all(funkopops.map(funkopop => FunkoPop.create(funkopop)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();
