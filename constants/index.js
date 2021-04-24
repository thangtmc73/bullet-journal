module.exports = {
  get Color() {
    return require('./color');
  },
  get BulletType() {
    return require('./bulletType');
  },
  get BulletSymbol() {
    return require('./bulletSymbol').default;
  },
};
