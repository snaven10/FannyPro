import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsOptionOneComponent } from './breadcrumbs-option-one.component';

describe('BreadcrumbsOptionOneComponent', () => {
  let component: BreadcrumbsOptionOneComponent;
  let fixture: ComponentFixture<BreadcrumbsOptionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbsOptionOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsOptionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
