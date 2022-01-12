import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrettingViewComponent } from './gretting-view.component';

describe('GrettingViewComponent', () => {
  let component: GrettingViewComponent;
  let fixture: ComponentFixture<GrettingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrettingViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrettingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
