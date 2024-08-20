import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordOrdersComponent } from './record-orders.component';

describe('RecordOrdersComponent', () => {
  let component: RecordOrdersComponent;
  let fixture: ComponentFixture<RecordOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecordOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
