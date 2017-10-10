import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAlertComponent } from './single-alert.component';

describe('SingleAlertComponent', () => {
  let component: SingleAlertComponent;
  let fixture: ComponentFixture<SingleAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
