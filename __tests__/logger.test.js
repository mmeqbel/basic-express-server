'use strict';
const logger = require('../src/middleware/logger.js');

describe('Logger Middleware', () => { // coupling test with header(logger middleware)
  let consoleSpy; //undefined variable
  const req = {}; //    empty object 
  const res = {}; // empty object
  const next = jest.fn(); //imaginary function

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();//console.log() mock impelmentation 
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs output correctly', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled(); //is the console log has been called
    
  });
  it('call the next function',()=>{
    expect(next).toHaveBeenCalledWith(); // is the next finction has been called with no argument
  })

});