const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ordered_fruit extends Model {
    static associate(models) {
      this.belongsTo(models.order, { foreignKey: "orderId" });
      this.belongsTo(models.fruit, { foreignKey: "fruitId" });
    }
  }
  Ordered_fruit.init(
    {
      quantity: DataTypes.INTERGER,
      orderId: {
        type: DataTypes.INTERGER,
        references: {
          model: "order",
          key: "id",
        },
      },
      fruitId: {
        type: DataTypes.INTERGER,
        references: {
          model: "fruit",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "ordered_fruit",
      underscored: true,
    }
  );
  return Ordered_fruit;
};
