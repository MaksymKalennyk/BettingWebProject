import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NDVComponent } from './ndv.component';

describe('NDVComponent', () => {
  let component: NDVComponent;
  let fixture: ComponentFixture<NDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NDVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
