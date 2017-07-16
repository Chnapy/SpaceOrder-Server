import {QueryInterface, Sequelize} from "sequelize";


module.exports = {

    up(queryInterface: QueryInterface, Sequelize: Sequelize, done: () => null) {
        // const password = new Password({
        //     password: 'test_pwd',
        //     salt: [21, 34, 56]
        // });
        //
        // const user = new User({
        //     username: "Chnapy",
        //     password: password,
        //     email: "toto@aaa.com",
        //     date_register: new Date(),
        //     date_last_activity: new Date()
        // });

        // queryInterface.createTable(User.name.toString(), {});

        done();
    },

    down(queryInterface) {

    }

};