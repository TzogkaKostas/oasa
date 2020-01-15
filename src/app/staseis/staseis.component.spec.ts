import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaseisComponent } from './staseis.component';

describe('StaseisComponent', () => {
  let component: StaseisComponent;
  let fixture: ComponentFixture<StaseisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaseisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
