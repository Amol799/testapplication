import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerreviewComponent } from './customerreview.component';

describe('CustomerreviewComponent', () => {
  let component: CustomerreviewComponent;
  let fixture: ComponentFixture<CustomerreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
