import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NHComponent } from './nh.component';

describe('NHComponent', () => {
  let component: NHComponent;
  let fixture: ComponentFixture<NHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
