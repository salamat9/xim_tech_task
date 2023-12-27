module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("TokenBlackList", {
      guid: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      token: {
        type: Sequelize.TEXT('medium'),
        allowNull: false,
      },
      createdAt: {
        type: 'TIMESTAMP',
        allowNull: false,
      },
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable("TokenBlackList");
  }
};
