import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipyDetailComponent } from './recipy-detail.component';

describe('RecipyDetailComponent', () => {
  let component: RecipyDetailComponent;
  let fixture: ComponentFixture<RecipyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
