import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDeathComponent } from './home-death.component';

describe('HomeDeathComponent', () => {
  let component: HomeDeathComponent;
  let fixture: ComponentFixture<HomeDeathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeDeathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
