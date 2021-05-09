'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('jo_debit_note', {
      id_debit_note: {
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
      agent_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      no_blanko: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ppn_idr: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      ppn_usd: {
        type: Sequelize.DOUBLE,
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
    await queryInterface.sequelize.query("ALTER TABLE jo_debit_note ADD CONSTRAINT FK_JO_NUMBER FOREIGN KEY (jo_number) REFERENCES job_order(jo_number) ON DELETE CASCADE")
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('jo_debit_note');

  }
};
