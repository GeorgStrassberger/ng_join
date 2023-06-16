import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestboxComponent } from './testbox.component';

describe('TestboxComponent', () => {
  let component: TestboxComponent;
  let fixture: ComponentFixture<TestboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
