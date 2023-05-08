import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VBComponent } from './vb.component';

describe('VBComponent', () => {
  let component: VBComponent;
  let fixture: ComponentFixture<VBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
