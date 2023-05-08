import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LNComponent } from './ln.component';

describe('LNComponent', () => {
  let component: LNComponent;
  let fixture: ComponentFixture<LNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
