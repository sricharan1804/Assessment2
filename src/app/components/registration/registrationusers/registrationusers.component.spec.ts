import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationusersComponent } from './registrationusers.component';

describe('RegistrationusersComponent', () => {
  let component: RegistrationusersComponent;
  let fixture: ComponentFixture<RegistrationusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
