import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenviewsComponent } from './citizenviews.component';

describe('CitizenviewsComponent', () => {
  let component: CitizenviewsComponent;
  let fixture: ComponentFixture<CitizenviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitizenviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitizenviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
