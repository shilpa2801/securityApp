import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EocagentComponent } from './eocagent.component';

describe('EocagentComponent', () => {
  let component: EocagentComponent;
  let fixture: ComponentFixture<EocagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EocagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EocagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
