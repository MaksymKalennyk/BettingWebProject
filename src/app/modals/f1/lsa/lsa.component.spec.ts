import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSaComponent } from './lsa.component';

describe('LSaComponent', () => {
  let component: LSaComponent;
  let fixture: ComponentFixture<LSaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
