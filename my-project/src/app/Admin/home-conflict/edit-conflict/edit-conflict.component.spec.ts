import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConflictComponent } from './edit-conflict.component';

describe('EditConflictComponent', () => {
  let component: EditConflictComponent;
  let fixture: ComponentFixture<EditConflictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditConflictComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditConflictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
