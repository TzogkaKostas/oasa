import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortisiKartasComponent } from './fortisi-kartas.component';

describe('FortisiKartasComponent', () => {
  let component: FortisiKartasComponent;
  let fixture: ComponentFixture<FortisiKartasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortisiKartasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortisiKartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
