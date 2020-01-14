import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlhroforiesComponent } from './plhrofories.component';

describe('PlhroforiesComponent', () => {
  let component: PlhroforiesComponent;
  let fixture: ComponentFixture<PlhroforiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlhroforiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlhroforiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
