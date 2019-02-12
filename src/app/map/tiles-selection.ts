/*
The {y} parameter has sometimes to negated like {-y}
See https://github.com/openplanetary/opm/issues/6
 */

export enum Tiles {
  mapbox = 'https://{a-c}.tiles.mapbox.com/v3/herwig.map-siz5m7we/{z}/{x}/{y}.png',
  carto = 'https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-1/all/{z}/{x}/{y}.png',
  opmBlackWith = 'https://s3.amazonaws.com/opmbuilder/301_moon/tiles/w/hillshaded-albedo/{z}/{x}/{-y}.png',
  nasaGreyscale = 'http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/mola-gray/{z}/{x}/{-y}.png',
  molaShadedEvelation = 'http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/mola-color/{z}/{x}/{-y}.png',
  nasaViking = 'http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/viking_mdim21_global/{z}/{x}/{-y}.png',
  surfaceTexture = 'http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/celestia_mars-shaded-16k_global/{z}/{x}/{-y}.png',

}
