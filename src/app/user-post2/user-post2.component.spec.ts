import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPost2Component } from './user-post2.component';

describe('UserPost2Component', () => {
  let component: UserPost2Component;
  let fixture: ComponentFixture<UserPost2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPost2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPost2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
