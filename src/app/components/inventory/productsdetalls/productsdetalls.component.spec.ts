import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsdetallsComponent } from './productsdetalls.component';

describe('ProductsdetallsComponent', () => {
  let component: ProductsdetallsComponent;
  let fixture: ComponentFixture<ProductsdetallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsdetallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsdetallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
