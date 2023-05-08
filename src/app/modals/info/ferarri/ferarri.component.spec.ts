import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerarriComponent } from './ferarri.component';

describe('FerarriComponent', () => {
  let component: FerarriComponent;
  let fixture: ComponentFixture<FerarriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerarriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FerarriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
