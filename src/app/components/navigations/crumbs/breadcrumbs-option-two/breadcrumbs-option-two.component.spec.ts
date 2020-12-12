import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsOptionTwoComponent } from './breadcrumbs-option-two.component';

describe('BreadcrumbsOptionTwoComponent', () => {
  let component: BreadcrumbsOptionTwoComponent;
  let fixture: ComponentFixture<BreadcrumbsOptionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbsOptionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsOptionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
