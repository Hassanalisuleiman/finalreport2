import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDesasterComponent } from './edit-desaster.component';

describe('EditDesasterComponent', () => {
  let component: EditDesasterComponent;
  let fixture: ComponentFixture<EditDesasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDesasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDesasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
