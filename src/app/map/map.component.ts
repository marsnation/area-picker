import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import ScaleLine from 'ol/control/ScaleLine';
import {Raster} from './raster';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map: Map;
  private tilesUrl = 'https://{a-c}.tiles.mapbox.com/v3/herwig.map-siz5m7we/{z}/{x}/{y}.png';

  private source: VectorSource;
  private layer: VectorLayer;

  private raster: Raster;
  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  private initMap() {
    const scaleLine = new ScaleLine();
    this.map = new Map({
      target: 'olmap',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: this.tilesUrl
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
    this.map.addControl(scaleLine);

    this.raster = new Raster(this.map);
  }
}
