'use strict';
module.exports = {
  // function to run when (trying) to create the table (or make needed changes to it)
  up: (queryInterface, Sequelize) => {
    // define all columns in Contexts, including id, createdAt, and updatedAt as well as foreign keys (see UserId)
    return queryInterface.createTable('Contexts', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },
  // function to run when reverting the changes to the table
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contexts');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};