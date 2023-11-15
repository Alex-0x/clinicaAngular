import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsameComponent } from './esame.component';

describe('EsameComponent', () => {
  let component: EsameComponent;
  let fixture: ComponentFixture<EsameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsameComponent]
    });
    fixture = TestBed.createComponent(EsameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
