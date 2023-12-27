module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Files", {
      guid: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING,
      },
      mimetype: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      size: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      createdAt: {
        type: 'TIMESTAMP',
        allowNull: false,
      },
      updatedAt: {
        type: 'TIMESTAMP',
      },
    },)
  },

  async down (queryInterface) {
    await queryInterface.dropTable("Files");
  }
};
