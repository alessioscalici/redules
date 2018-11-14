
const {
  generateTypeDescriptors,
} = require('../src/treeDescriptorMethods');

const {
  USERTYPE_CONFIG,
} = require('./mocks/customConfigs');



describe('used without any parameter', () => {
  const type = generateTypeDescriptors();
  expect(type).toEqual({});
});


describe('used with a custom configuration containing new types', () => {

  const type = generateTypeDescriptors(USERTYPE_CONFIG);


  it('should define the custom types', () => {
    expect(typeof type.userType).toBe('function');
  });

  describe('custom types descriptor', () => {
    const VALID_VALUE = { username: 'pippo', password: '123456' };

    it('should define isLeaf to true', () => {
      const descr = type.userType(VALID_VALUE);
      expect(descr.isLeaf).toBe(true);
    });

    it('should define initialValue to the value passed in the descriptor', () => {
      const descr = type.userType(VALID_VALUE);
      expect(descr.initialValue).toBe(VALID_VALUE);
    });
  });
});