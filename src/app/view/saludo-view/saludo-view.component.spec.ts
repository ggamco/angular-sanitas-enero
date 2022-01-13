import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoViewComponent } from './saludo-view.component';

describe('SaludoViewComponent', () => {
  let component: SaludoViewComponent;
  let fixture: ComponentFixture<SaludoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
