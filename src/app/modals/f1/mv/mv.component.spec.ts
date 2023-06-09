import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MVComponent } from './mv.component';

describe('MVComponent', () => {
  let component: MVComponent;
  let fixture: ComponentFixture<MVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
