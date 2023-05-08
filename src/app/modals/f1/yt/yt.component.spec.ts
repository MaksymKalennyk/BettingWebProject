import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YTComponent } from './yt.component';

describe('YTComponent', () => {
  let component: YTComponent;
  let fixture: ComponentFixture<YTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
