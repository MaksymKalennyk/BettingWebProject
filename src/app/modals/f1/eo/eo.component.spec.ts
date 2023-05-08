import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EOComponent } from './eo.component';

describe('EOComponent', () => {
  let component: EOComponent;
  let fixture: ComponentFixture<EOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
