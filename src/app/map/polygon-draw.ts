import VectorSource from 'ol/source/Vector';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import Draw from 'ol/interaction/Draw';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import {EventEmitter} from '@angular/core';
import Feature from 'ol/Feature';

export class PolygonDraw {
  private readonly source: VectorSource;
  private readonly layer: VectorLayer;
  private interaction: Draw;

  public onPolygonDrawn = new EventEmitter<Feature>();

  private style = new Style({
    fill: new Fill({
      color: 'rgba(81, 255, 207, 0.05)'
    }),
    stroke: new Stroke({
      color: '#51FFCF',
      width: 2
    }),
    image: new CircleStyle({
      radius: 7,
      fill: new Fill({
        color: '#51FFCF'
      })
    })
  });

  constructor(public map: Map) {
    this.source = new VectorSource({wrapX: false});
    this.layer = new VectorLayer({
      source: this.source,
      style: this.style
    });
    this.map.addLayer(this.layer);

    this.interaction = new Draw({
      source: this.source,
      type: 'Polygon'
    });
    this.interaction.on('drawend', event => {
      this.onPolygonDrawn.emit(event.feature);
      this.enabled = false;
    });
  }

  public get enabled(): boolean {
    return this.map.getInteractions().getArray().indexOf(this.interaction) > -1;
  }

  public set enabled(value: boolean) {
    if (this.enabled === value) {
      return;
    }
    if (value) {
      this.source.clear();
      this.map.addInteraction(this.interaction);
    } else {
      this.map.removeInteraction(this.interaction);
    }
  }



}
