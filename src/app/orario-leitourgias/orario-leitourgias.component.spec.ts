import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrarioLeitourgiasComponent } from './orario-leitourgias.component';

describe('OrarioLeitourgiasComponent', () => {
  let component: OrarioLeitourgiasComponent;
  let fixture: ComponentFixture<OrarioLeitourgiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrarioLeitourgiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrarioLeitourgiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
