import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesEisitirionComponent } from './times-eisitirion.component';

describe('TimesEisitirionComponent', () => {
  let component: TimesEisitirionComponent;
  let fixture: ComponentFixture<TimesEisitirionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesEisitirionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesEisitirionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
