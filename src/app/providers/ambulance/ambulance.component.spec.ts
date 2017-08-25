import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceComponent } from './ambulance.component';

describe('AmbulanceComponent', () => {
  let component: AmbulanceComponent;
  let fixture: ComponentFixture<AmbulanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
