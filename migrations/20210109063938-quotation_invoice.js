'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('quotation_invoice', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      quo_number: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
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
      amount_IDR: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      amount_USD: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.sequelize.query("ALTER TABLE quotation_invoice ADD CONSTRAINT FKquotation_invoice FOREIGN KEY (quo_number) REFERENCES quotation(quo_number) ON DELETE CASCADE")

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('quotation_invoice');

  }
};
