const validator = require('../src/middleware/validator.js');
const errorHandler = require('../src/error-handlers/500.js'); // handler for error

describe('Validator Middleware', () => { // coupling test with header(validator middleware)

    let consoleSpy; //undefined variable
    const valideReq = {query:{name:'name'}}; //    empty object 
    const inValidReq={};
    const res = {}; // empty object
    const next = jest.fn(); //imaginary function

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();//console.log() mock impelmentation 
    });
    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('Valid request  ', () => {
        validator(valideReq, res, next);
        expect(consoleSpy).toHaveBeenCalled(); //is the console log has been called
        expect(next).toHaveBeenCalledWith();
        
    });
    it('Invalid request',()=>{
        expect(()=>{
            validator(inValidReq, res, next);
        }).toThrow();// is the validator through new error when it is provided invalid query
    })
   

});
