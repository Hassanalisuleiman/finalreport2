import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordConflictComponent } from './record-conflict.component';

describe('RecordConflictComponent', () => {
  let component: RecordConflictComponent;
  let fixture: ComponentFixture<RecordConflictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecordConflictComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordConflictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
