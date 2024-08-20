import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterShehaComponent } from './register-sheha.component';

describe('RegisterShehaComponent', () => {
  let component: RegisterShehaComponent;
  let fixture: ComponentFixture<RegisterShehaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterShehaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterShehaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
