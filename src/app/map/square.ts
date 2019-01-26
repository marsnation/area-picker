import {SquareManager} from './square-manager';
import Feature from 'ol/Feature';
import Polygon from 'ol/geom/Polygon';
import Geometry from 'ol/geom/Geometry';

export class Square {
  constructor(public xLeft: number, public yBottom: number) {

  }

  public get xRight(): number {
    return this.xLeft + SquareManager.squareSize;
  }

  public get yTop(): number {
    return this.yBottom + SquareManager.squareSize;
  }

  public get olFeature(): Feature {
    return new Feature(this.olGeometry);
  }

  public get olGeometry(): Geometry {
    const coordinates = [[
      [this.xLeft, this.yBottom],
      [this.xRight, this.yBottom],
      [this.xRight, this.yTop],
      [this.xLeft, this.yTop],
      [this.xLeft, this.yBottom]
    ]];
    return new Polygon(coordinates);
  }
}
