import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarNavComponent } from './bar-nav.component';

describe('BarNavComponent', () => {
  let component: BarNavComponent;
  let fixture: ComponentFixture<BarNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarNavComponent]
    });
    fixture = TestBed.createComponent(BarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
