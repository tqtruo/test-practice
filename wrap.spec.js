const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Should be a function', ()=>{
      expect(wrap).to.be.a('function');
  })
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  
  it('Returns a string with a maximum number of characters between line breaks without separating a word', ()=>{
    expect(wrap("hello world my name is theo", 6)).to.equal("hello\nworld\nmy\nname\nis\ntheo");
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na", 20)).to.equal("Lorem ipsum dolor\nsit eu amet, elit na");
  });
});