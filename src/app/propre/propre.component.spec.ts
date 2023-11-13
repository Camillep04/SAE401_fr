import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropreComponent } from './propre.component';

describe('PropreComponent', () => {
  let component: PropreComponent;
  let fixture: ComponentFixture<PropreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropreComponent]
    });
    fixture = TestBed.createComponent(PropreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
