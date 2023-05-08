import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaRomeoComponent } from './alpha-romeo.component';

describe('AlphaRomeoComponent', () => {
  let component: AlphaRomeoComponent;
  let fixture: ComponentFixture<AlphaRomeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaRomeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphaRomeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
