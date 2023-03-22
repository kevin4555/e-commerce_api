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
