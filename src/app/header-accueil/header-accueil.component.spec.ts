import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAccueilComponent } from './header-accueil.component';

describe('HeaderAccueilComponent', () => {
  let component: HeaderAccueilComponent;
  let fixture: ComponentFixture<HeaderAccueilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderAccueilComponent]
    });
    fixture = TestBed.createComponent(HeaderAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
