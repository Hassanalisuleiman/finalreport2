import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenfeedbackComponent } from './citizenfeedback.component';

describe('CitizenfeedbackComponent', () => {
  let component: CitizenfeedbackComponent;
  let fixture: ComponentFixture<CitizenfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitizenfeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitizenfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
