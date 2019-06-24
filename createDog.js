function createDog(name, age, weight) {
  return {
    name, 
    age, 
    weight, 
  };
}
  
const dog = createDog('cat', 2, '6lbs');
console.log(dog);
  
module.exports = createDog;
