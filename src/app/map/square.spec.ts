import {Square} from './square';


describe('Square', () => {


  it('Create', () => {
    const square = new Square(0, 0, 1);
    expect(square.xRight).toEqual(10000);
  });


});
