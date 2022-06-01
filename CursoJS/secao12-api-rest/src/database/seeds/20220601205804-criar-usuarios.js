module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('People', [{
      name: 'John Doe',
      isBetaMember: false,
    }], {});
  },

  // eslint-disable-next-line no-empty-function
  async down() {
  },
};
