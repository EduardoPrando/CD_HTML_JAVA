import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationInputsComponent } from './user-information-inputs.component';

describe('UserInformationInputsComponent', () => {
  let component: UserInformationInputsComponent;
  let fixture: ComponentFixture<UserInformationInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInformationInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformationInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
