import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimuserComponent } from './victimuser.component';

describe('VictimuserComponent', () => {
  let component: VictimuserComponent;
  let fixture: ComponentFixture<VictimuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictimuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
