import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingHomeComponent } from './pricing-home.component';

describe('PricingHomeComponent', () => {
  let component: PricingHomeComponent;
  let fixture: ComponentFixture<PricingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
