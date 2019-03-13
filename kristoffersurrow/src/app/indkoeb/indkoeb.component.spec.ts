import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndkoebComponent } from './indkoeb.component';

describe('IndkoebComponent', () => {
  let component: IndkoebComponent;
  let fixture: ComponentFixture<IndkoebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndkoebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndkoebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
