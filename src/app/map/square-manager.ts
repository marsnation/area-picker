import {Square} from './square';
import {SquareDefinitions} from './square-definitions';

export class SquareManager {

  private _squares = this.generateSquares();

  public get allSquares(): Array<Square> {
    return this._squares;
  }

  private generateSquares(): Array<Square> {
    const result = [];
    let idCounter = 0;
    for (let xStart = SquareDefinitions.minX; xStart < SquareDefinitions.maxX; xStart += SquareDefinitions.squareSize) {
      for (let yStart = SquareDefinitions.minY; yStart < SquareDefinitions.maxY; yStart += SquareDefinitions.squareSize) {
        const square = new Square(xStart, yStart, idCounter);
        result.push(square);
        idCounter += 1;
      }
    }
    return result;
  }
}
