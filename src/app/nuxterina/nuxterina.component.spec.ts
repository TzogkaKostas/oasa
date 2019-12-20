import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuxterinaComponent } from './nuxterina.component';

describe('NuxterinaComponent', () => {
  let component: NuxterinaComponent;
  let fixture: ComponentFixture<NuxterinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuxterinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuxterinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
