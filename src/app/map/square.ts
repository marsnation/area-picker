import Feature from 'ol/Feature';
import Polygon from 'ol/geom/Polygon';
import {SquareDefinitions} from './square-definitions';

export class Square {
  constructor(public xLeft: number, public yBottom: number) {

  }

  public get xRight(): number {
    return this.xLeft + SquareDefinitions.squareSize;
  }

  public get yTop(): number {
    return this.yBottom + SquareDefinitions.squareSize;
  }

  public get olFeature(): Feature {
    return new Feature(this.olPolygon);
  }

  public get olPolygon(): Polygon {
    const coordinates = [[
      [this.xLeft, this.yBottom],
      [this.xRight, this.yBottom],
      [this.xRight, this.yTop],
      [this.xLeft, this.yTop],
      [this.xLeft, this.yBottom]
    ]];
    return new Polygon(coordinates);
  }

  public isWithin(polygon: Polygon): boolean {
    const definingCoordinates = [
      [this.xLeft, this.yBottom],
      [this.xRight, this.yBottom],
      [this.xRight, this.yTop],
      [this.xLeft, this.yTop]
    ];
    for (const coordinate of definingCoordinates) {
      if (!polygon.intersectsCoordinate(coordinate)) {
        return false;
      }
    }
    return true;
  }
}
