import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandRecordsComponent } from './land-records.component';

describe('LandRecordsComponent', () => {
  let component: LandRecordsComponent;
  let fixture: ComponentFixture<LandRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandRecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
