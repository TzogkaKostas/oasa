import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErotimatologioComponent } from './erotimatologio.component';

describe('ErotimatologioComponent', () => {
  let component: ErotimatologioComponent;
  let fixture: ComponentFixture<ErotimatologioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErotimatologioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErotimatologioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
