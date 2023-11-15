import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DottoreComponent } from './dottore.component';

describe('DottoreComponent', () => {
  let component: DottoreComponent;
  let fixture: ComponentFixture<DottoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DottoreComponent]
    });
    fixture = TestBed.createComponent(DottoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
