import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaParapononComponent } from './forma-paraponon.component';

describe('FormaParapononComponent', () => {
  let component: FormaParapononComponent;
  let fixture: ComponentFixture<FormaParapononComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaParapononComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaParapononComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
