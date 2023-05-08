import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GRComponent } from './gr.component';

describe('GRComponent', () => {
  let component: GRComponent;
  let fixture: ComponentFixture<GRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
