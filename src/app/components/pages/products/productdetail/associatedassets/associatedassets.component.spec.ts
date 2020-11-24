import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedassetsComponent } from './associatedassets.component';

describe('AssociatedassetsComponent', () => {
  let component: AssociatedassetsComponent;
  let fixture: ComponentFixture<AssociatedassetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociatedassetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
