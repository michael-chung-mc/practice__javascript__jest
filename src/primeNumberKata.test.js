const primeNumber = require('./primeNumberKata.js')

describe("canary", ()=> {
    it("test testing environment", ()=> {
        expect(true).toBe(true);
    })
})

describe("prime number function should", ()=> {
    it("return none for 1", ()=>{
        expect(primeNumber(1)).toEqual([]);
    });
    it("return 2 for 2", ()=>{
        expect(primeNumber(2)).toEqual([2]);
    });
    it.todo("return 3 for 3");
    it.todo("return 2, 2 for 4");
    it.todo("return 5 for 5");
    it.todo("return 2,3 for 6");
    it.todo("return 7 for 7");
    it.todo("return 2,2,2 for 8");
    it.todo("return 3,3 for 9");
})