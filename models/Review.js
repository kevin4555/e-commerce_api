const { Model, DataTypes } = require("sequelize");

class Review extends Model {
  static initModel(sequelize) {
    Review.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            notNull: { msg: "content is required" },
            notEmpty: true,
          },
        },
      },
      {
        sequelize,
        modelName: "review",
      },
    );
    return Review;
  }
}

module.exports = Review;
