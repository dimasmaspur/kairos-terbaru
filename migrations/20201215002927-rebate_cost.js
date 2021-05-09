'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rebate_income_cost', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_rebate_income: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      item_cost: {
        type: Sequelize.STRING,
        allowNull: false
      },
      unit: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      currency: {
        type: Sequelize.STRING,
        allowNull: false
      },
      flag_ppn: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      note: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    await queryInterface.sequelize.query("ALTER TABLE rebate_income_cost ADD CONSTRAINT FK_rebateIncome FOREIGN KEY (id_rebate_income) REFERENCES joc_rebate_income(id_rebate_income) ON DELETE CASCADE")
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('rebate_income_cost');

  }
};
