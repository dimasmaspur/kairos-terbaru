'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('joc_consol', {
      id: {
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
      bl_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mbl_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      freight_type: {
        type: Sequelize.ENUM,
        values: ["prepaid", "collect"],
        allowNull: false
      },
      shipment_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      consignee: {
        type: Sequelize.STRING,
        allowNull: false
      },
      notify_party: {
        type: Sequelize.STRING,
        allowNull: false
      },
      agent: {
        type: Sequelize.STRING,
        allowNull: false
      },
      carriage: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vessel: {
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
      loading: {
        type: Sequelize.STRING,
        allowNull: false
      },
      receipt: {
        type: Sequelize.STRING,
        allowNull: false
      },
      discharge: {
        type: Sequelize.STRING,
        allowNull: false
      },
      delivery: {
        type: Sequelize.STRING,
        allowNull: false
      },
      marks_and_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description_of_goods: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type_package: {
        type: Sequelize.STRING,
        allowNull: false
      },
      option_qty: {
        type: Sequelize.ENUM,
        values: ["FCL", "LCL"],
        allowNull: false
      },
      no_quantity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      qty: {
        type: Sequelize.STRING,
        allowNull: false
      },
      seal_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      measurement: {
        type: Sequelize.STRING,
        allowNull: false
      },
      net_weight: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gross_weight: {
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
    await queryInterface.sequelize.query("ALTER TABLE joc_consol ADD CONSTRAINT FK_kjaskdksd FOREIGN KEY (joc_number) REFERENCES job_consol(joc_number) ON DELETE CASCADE")
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('joc_consol');

  }
};
