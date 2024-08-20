import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAddresseeComponent } from './home-addressee.component';

describe('HomeAddresseeComponent', () => {
  let component: HomeAddresseeComponent;
  let fixture: ComponentFixture<HomeAddresseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeAddresseeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeAddresseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
