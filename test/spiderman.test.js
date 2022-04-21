 const Spiderman = require('../app/spiderman')
 
 describe("Unit Tests for spiderman class", () => {
     test('1) Create a spiderman object', () => {
       const andrewGarfield = new Spiderman ("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony");
       expect(andrewGarfield.name).toBe("Spiderman Sony");
       expect(andrewGarfield.age).toBe(31);
       expect(andrewGarfield.actor).toBe("Andrew Garfield");
       expect(andrewGarfield.movies).toBe(2);
       expect(andrewGarfield.studio).toBe("Sony");
     });
 })


 describe("Unit Test for function getinfo ", () => {
   test('2) Use the method getInfo()', () => {
     const TomHolland = new Spiderman("Hey I'm Tom Holland From Marvel Studio");
     expect(TomHolland.name).toBe('Tom Holland');
   });
 })