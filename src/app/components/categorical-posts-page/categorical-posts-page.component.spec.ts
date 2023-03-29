import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoricalPostsPageComponent } from './categorical-posts-page.component';

describe('CategoricalPostsPageComponent', () => {
  let component: CategoricalPostsPageComponent;
  let fixture: ComponentFixture<CategoricalPostsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoricalPostsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoricalPostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
