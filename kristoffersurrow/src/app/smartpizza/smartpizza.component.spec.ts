import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartpizzaComponent } from './smartpizza.component';

describe('SmartpizzaComponent', () => {
  let component: SmartpizzaComponent;
  let fixture: ComponentFixture<SmartpizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartpizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
