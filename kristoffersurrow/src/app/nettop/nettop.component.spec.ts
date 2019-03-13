import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NettopComponent } from './nettop.component';

describe('NettopComponent', () => {
  let component: NettopComponent;
  let fixture: ComponentFixture<NettopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NettopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NettopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
