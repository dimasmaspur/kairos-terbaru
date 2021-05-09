'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('quotation_payrequest', {
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
      expires_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      terms_payment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM,
        values: ["import", "export"],
        allowNull: false
      },
      subject: {
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
      kurs: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      destination_origin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      consol: {
        type: Sequelize.ENUM,
        values: ["consol", "coloud"],
        allowNull: false
      },
      customer_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      agen_rate: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      special_rate: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      LSS: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      others: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      CFS: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      Mechanic: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      ocean_freight: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      deskripsi_header: {
        type: Sequelize.STRING,
        allowNull: true
      },
      deskripsi_footer: {
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
    await queryInterface.sequelize.query("ALTER TABLE quotation_payrequest ADD CONSTRAINT FKquotation_payrequest FOREIGN KEY (quo_number) REFERENCES quotation(quo_number) ON DELETE CASCADE")

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('quotation_payrequest');

  }
};
