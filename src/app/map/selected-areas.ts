import VectorSource from 'ol/source/Vector';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import Feature from 'ol/Feature';
import {Square} from './square';
import Geometry from 'ol/geom/Geometry';
import {SquareManager} from './square-manager';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';


export class SelectedAreas {
  private readonly source: VectorSource;
  private readonly layer: VectorLayer;
  private squareManager = new SquareManager();

  private style = new Style({
    fill: new Fill({
      color: 'rgba(219, 0, 11, 0.2)'
    }),
    stroke: new Stroke({
      color: '#db000b',
      width: 2
    })
  });

  constructor(public map: Map) {
    this.source = new VectorSource({wrapX: false});

    this.layer = new VectorLayer({
      source: this.source,
      style: this.style
    });
    this.map.addLayer(this.layer);
  }

  public select(feature: Feature) {
    this.source.clear();
    const featuresWithin = this.getFeaturesWithin(feature.getGeometry());
    this.source.addFeatures(featuresWithin);

    const squaresWithin = this.getSquaresWithin(feature.getGeometry());
    this.logSquares(squaresWithin);
  }

  private logSquares(squares: Array<Square>) {
    console.log('Selected squareas');
    for (const square of squares) {
      console.log(square.id);
    }
  }

  private getFeaturesWithin(geometry: Geometry): Array<Feature> {
    const result = [];
    for (const square of this.squareManager.allSquares) {
      if (square.isWithin(geometry)) {
        result.push(square.olFeature);
      }
    }
    return result;
  }

  private getSquaresWithin(geometry: Geometry): Array<Feature> {
    const result = [];
    for (const square of this.squareManager.allSquares) {
      if (square.isWithin(geometry)) {
        result.push(square);
      }
    }
    return result;
  }
}
