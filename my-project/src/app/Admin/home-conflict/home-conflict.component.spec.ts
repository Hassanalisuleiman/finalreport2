import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConflictComponent } from './home-conflict.component';

describe('HomeConflictComponent', () => {
  let component: HomeConflictComponent;
  let fixture: ComponentFixture<HomeConflictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeConflictComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeConflictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
