'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('job_order', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      jo_number: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM,
        values: ["import", "export"],
        allowNull: false
      },
      customer_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      terms_payment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      subject: {
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
    await queryInterface.addConstraint('job_order', {
      type: 'unique',
      fields: ['jo_number'],
      name: 'UNIQUE_JO_NUMBER'
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('job_order');

  }
};
