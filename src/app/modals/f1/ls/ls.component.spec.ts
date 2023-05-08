import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSComponent } from './ls.component';

describe('LSComponent', () => {
  let component: LSComponent;
  let fixture: ComponentFixture<LSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
