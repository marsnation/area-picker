import VectorSource from 'ol/source/Vector';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import Feature from 'ol/Feature';


export class SelectedAreas {
  private readonly source: VectorSource;
  private readonly layer: VectorLayer;

  constructor(public map: Map) {
    this.source = new VectorSource({wrapX: false});

    this.layer = new VectorLayer({
      source: this.source
    });
    this.map.addLayer(this.layer);
  }

  public select(feature: Feature) {

  }
}
