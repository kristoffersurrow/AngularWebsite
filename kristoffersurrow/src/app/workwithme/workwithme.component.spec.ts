import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkwithmeComponent } from './workwithme.component';

describe('WorkwithmeComponent', () => {
  let component: WorkwithmeComponent;
  let fixture: ComponentFixture<WorkwithmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkwithmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkwithmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
