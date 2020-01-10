import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgoraEisitirwnComponent } from './agora-eisitirwn.component';

describe('AgoraEisitirwnComponent', () => {
  let component: AgoraEisitirwnComponent;
  let fixture: ComponentFixture<AgoraEisitirwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgoraEisitirwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgoraEisitirwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
