import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashSectionComponent } from './flash-section.component';

describe('FlashSectionComponent', () => {
  let component: FlashSectionComponent;
  let fixture: ComponentFixture<FlashSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
