'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('job_consol', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      joc_number: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM,
        values: ["import", "export"],
        allowNull: false
      },
      no_bl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      no_mbl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vessel: {
        type: Sequelize.STRING,
        allowNull: false
      },
      carrier: {
        type: Sequelize.STRING,
        allowNull: false
      },
      no_container: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type_container: {
        type: Sequelize.STRING,
        allowNull: false
      },
      agent: {
        type: Sequelize.STRING,
        allowNull: false
      },
      loading: {
        type: Sequelize.STRING,
        allowNull: false
      },
      discharge: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ETD: {
        type: Sequelize.DATE,
        allowNull: false
      },
      ETA: {
        type: Sequelize.DATE,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      weight: {
        type: Sequelize.STRING,
        allowNull: false
      },
      measurement: {
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
    // await queryInterface.addConstraint('job_consol', {
    //   type: 'unique',
    //   fields: ['joc_number'],
    //   name: 'UNIQUE_JOC_NUMBER'
    // })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('job_consol');

  }
};
