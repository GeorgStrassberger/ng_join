import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwForgotComponent } from './pw-forgot.component';

describe('PwForgotComponent', () => {
  let component: PwForgotComponent;
  let fixture: ComponentFixture<PwForgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwForgotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PwForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
