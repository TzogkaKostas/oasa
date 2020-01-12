import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApolesthentaComponent } from './apolesthenta.component';

describe('ApolesthentaComponent', () => {
  let component: ApolesthentaComponent;
  let fixture: ComponentFixture<ApolesthentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApolesthentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApolesthentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
