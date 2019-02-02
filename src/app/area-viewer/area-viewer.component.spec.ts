import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaViewerComponent } from './area-viewer.component';

describe('AreaViewerComponent', () => {
  let component: AreaViewerComponent;
  let fixture: ComponentFixture<AreaViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
