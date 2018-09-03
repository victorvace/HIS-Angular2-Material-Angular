import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DHistoryComponent } from './d-history.component';

describe('DHistoryComponent', () => {
  let component: DHistoryComponent;
  let fixture: ComponentFixture<DHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
