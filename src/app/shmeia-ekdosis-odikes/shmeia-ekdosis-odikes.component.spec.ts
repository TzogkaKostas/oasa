import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShmeiaEkdosisOdikesComponent } from './shmeia-ekdosis-odikes.component';

describe('ShmeiaEkdosisOdikesComponent', () => {
  let component: ShmeiaEkdosisOdikesComponent;
  let fixture: ComponentFixture<ShmeiaEkdosisOdikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShmeiaEkdosisOdikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShmeiaEkdosisOdikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
