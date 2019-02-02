import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AreaBuyerComponent } from './area-buyer/area-buyer.component';
import { AreaViewerComponent } from './area-viewer/area-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AreaBuyerComponent,
    AreaViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
