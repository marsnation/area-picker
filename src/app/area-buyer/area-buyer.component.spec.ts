import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaBuyerComponent } from './area-buyer.component';

describe('AreaBuyerComponent', () => {
  let component: AreaBuyerComponent;
  let fixture: ComponentFixture<AreaBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
