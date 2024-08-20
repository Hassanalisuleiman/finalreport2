import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShehaComponent } from './add-sheha.component';

describe('AddShehaComponent', () => {
  let component: AddShehaComponent;
  let fixture: ComponentFixture<AddShehaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddShehaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddShehaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
