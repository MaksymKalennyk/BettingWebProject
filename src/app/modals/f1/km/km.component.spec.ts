import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KMComponent } from './km.component';

describe('KMComponent', () => {
  let component: KMComponent;
  let fixture: ComponentFixture<KMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
