const createDog = require('./createDog.js');

//test suite
describe ('dog create function', () => {
  //individual tests
  it('returns a dog object', () => {
    const dog = createDog('cat', 2, '6lbs');
    expect(dog).toEqual({
      name: 'cat',
      age: 2,
      weight: '6lbs'
    });
  });
});
