import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpostFormComponent } from './userpost-form.component';

describe('UserpostFormComponent', () => {
  let component: UserpostFormComponent;
  let fixture: ComponentFixture<UserpostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpostFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
