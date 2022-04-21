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
     const TomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel");
     expect(TomHolland.getInfo()).toBe(`Hey I am Tom Holland From Marvel Studio`);
   });
 })


 describe("Unit Test for function getinfo ", () => {
  test('3) Use the method getInfo() with a new instance', () => {
    const TobeyMaguire = new Spiderman("Spiderman Sony", 46, "Tobey Maguird", 3, "Marvel");
    expect(TobeyMaguire.getInfo()).toBe(`Hey I am Tobey Maguire From Marvel Studio`);
  });
})