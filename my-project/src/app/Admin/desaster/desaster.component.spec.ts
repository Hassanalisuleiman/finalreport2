import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesasterComponent } from './desaster.component';

describe('DesasterComponent', () => {
  let component: DesasterComponent;
  let fixture: ComponentFixture<DesasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
