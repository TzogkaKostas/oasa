import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixnesErotiseisComponent } from './sixnes-erotiseis.component';

describe('SixnesErotiseisComponent', () => {
  let component: SixnesErotiseisComponent;
  let fixture: ComponentFixture<SixnesErotiseisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixnesErotiseisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixnesErotiseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
