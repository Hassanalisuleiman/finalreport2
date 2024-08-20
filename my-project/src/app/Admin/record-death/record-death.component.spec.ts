import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordDeathComponent } from './record-death.component';

describe('RecordDeathComponent', () => {
  let component: RecordDeathComponent;
  let fixture: ComponentFixture<RecordDeathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecordDeathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
