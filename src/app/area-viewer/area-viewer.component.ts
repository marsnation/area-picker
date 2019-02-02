import {Component, Input, OnInit} from '@angular/core';
import {Square} from '../map/square';

@Component({
  selector: 'app-area-viewer',
  templateUrl: './area-viewer.component.html',
  styleUrls: ['./area-viewer.component.scss']
})
export class AreaViewerComponent implements OnInit {
  private  _selectedAreas: Array<Square> = [];
  @Input()
  public set selectedAreas(squares: Array<Square>) {
    this._selectedAreas = squares;
  }

  public get selectedAreas(): Array<Square> {
    return this._selectedAreas;
  }
  constructor() { }

  ngOnInit() {
  }

}
