import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanglanteComponent } from './sanglante.component';

describe('SanglanteComponent', () => {
  let component: SanglanteComponent;
  let fixture: ComponentFixture<SanglanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanglanteComponent]
    });
    fixture = TestBed.createComponent(SanglanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
