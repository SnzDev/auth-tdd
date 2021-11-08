const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL, //VIRTUAL IT'S A TYPE ONLY LOCAL AND DOESN'T GO TO DATABASE
        password_hash: DataTypes.STRING,
    }, {
        hooks: {
            beforeSave: async user => {
                if (user.password) {
                    user.password_hash = await bcrypt.hash(user.password, 8);
                }
            }
        }
    }
    );

    User.prototype.checkPassword = function (password) {
        return bcrypt.compare(password, this.password_hash);
    }

    return User;
}