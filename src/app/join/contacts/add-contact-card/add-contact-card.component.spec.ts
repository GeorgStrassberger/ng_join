import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactCardComponent } from './add-contact-card.component';

describe('AddContactCardComponent', () => {
  let component: AddContactCardComponent;
  let fixture: ComponentFixture<AddContactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContactCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
