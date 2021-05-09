'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('joc_rebate_expense', {
      id_rebate_expense: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      joc_number: {
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
    await queryInterface.sequelize.query("ALTER TABLE joc_rebate_expense ADD CONSTRAINT FK_JOC_NUMBER_expense FOREIGN KEY (joc_number) REFERENCES job_consol(joc_number) ON DELETE CASCADE")
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('joc_rebate_expense');

  }
};
