import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesastersHomeComponent } from './desasters-home.component';

describe('DesastersHomeComponent', () => {
  let component: DesastersHomeComponent;
  let fixture: ComponentFixture<DesastersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesastersHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesastersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
