import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollMainComponent } from './scroll-main.component';

describe('ScrollMainComponent', () => {
  let component: ScrollMainComponent;
  let fixture: ComponentFixture<ScrollMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
