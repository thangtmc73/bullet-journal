module.exports = {
  get BulletType() {
    return require('./bulletType');
  },
  get BulletSymbol() {
    return require('./bulletSymbol').default;
  },
};
