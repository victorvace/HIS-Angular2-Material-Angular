import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DPatientComponent } from './d-patient.component';

describe('DPatientComponent', () => {
  let component: DPatientComponent;
  let fixture: ComponentFixture<DPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
