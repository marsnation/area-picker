import {Component, Input, OnInit} from '@angular/core';
import {Square} from '../map/square';

@Component({
  selector: 'app-area-buyer',
  templateUrl: './area-buyer.component.html',
  styleUrls: ['./area-buyer.component.scss']
})
export class AreaBuyerComponent implements OnInit {
  private pricePerPiece = 0.647;
  private  _selectedAreas: Array<Square> = [];
  @Input()
  public set selectedAreas(squares: Array<Square>) {
    this._selectedAreas = squares;
  }

  constructor() { }

  ngOnInit() {
  }

  public get lotCount(): number {
    return this._selectedAreas.length;
  }

  public get totalPrice(): number {
    return this.lotCount * this.pricePerPiece;
  }

  public get averagePrice(): number {
    return this.pricePerPiece;
  }

  public onBuyClick() {
    console.log('buy');
  }
}
