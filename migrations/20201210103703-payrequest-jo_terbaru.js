'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('payrequest_jo', {
      id_payrequest: {
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
      vendor_name: {
        type: Sequelize.STRING,
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
    await queryInterface.sequelize.query("ALTER TABLE payrequest_jo ADD CONSTRAINT FK_JO_NUMBERjorequest FOREIGN KEY (jo_number) REFERENCES job_order(jo_number) ON DELETE CASCADE")
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('payrequest_jo');
  }
};
