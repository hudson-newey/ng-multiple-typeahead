import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleInputComponent } from './multiple-input.component';

describe('MultipleInputComponent', () => {
  let component: MultipleInputComponent;
  let fixture: ComponentFixture<MultipleInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleInputComponent]
    });
    fixture = TestBed.createComponent(MultipleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
