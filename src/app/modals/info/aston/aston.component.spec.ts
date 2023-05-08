import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstonComponent } from './aston.component';

describe('AstonComponent', () => {
  let component: AstonComponent;
  let fixture: ComponentFixture<AstonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
