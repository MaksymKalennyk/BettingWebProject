import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GZComponent } from './gz.component';

describe('GZComponent', () => {
  let component: GZComponent;
  let fixture: ComponentFixture<GZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GZComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
