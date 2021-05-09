'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data_invoice', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      jo_number: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      kode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      invoice_to: {
        type: Sequelize.STRING,
        allowNull: false
      },
      no_blanko: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ppn_idr: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      ppn_usd: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      biaya_materai: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      note: {
        type: Sequelize.TEXT,
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
    await queryInterface.sequelize.query("ALTER TABLE data_invoice ADD CONSTRAINT FK_JO_NUMBER_Invoice FOREIGN KEY (jo_number) REFERENCES job_order(jo_number) ON DELETE CASCADE")
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('data_invoice');

  }
};
