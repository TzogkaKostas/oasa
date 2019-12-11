import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvresiDiadromisComponent } from './evresi-diadromis.component';

describe('EvresiDiadromisComponent', () => {
  let component: EvresiDiadromisComponent;
  let fixture: ComponentFixture<EvresiDiadromisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvresiDiadromisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvresiDiadromisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
