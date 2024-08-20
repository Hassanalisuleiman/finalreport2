import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthRegistrationComponent } from './birth-registration.component';

describe('BirthRegistrationComponent', () => {
  let component: BirthRegistrationComponent;
  let fixture: ComponentFixture<BirthRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BirthRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BirthRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
