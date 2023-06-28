import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactCardComponent } from './edit-contact-card.component';

describe('EditContactCardComponent', () => {
  let component: EditContactCardComponent;
  let fixture: ComponentFixture<EditContactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditContactCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
