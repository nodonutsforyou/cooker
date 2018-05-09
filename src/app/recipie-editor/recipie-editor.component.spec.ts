import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipieEditorComponent } from './recipie-editor.component';

describe('RecipieEditorComponent', () => {
  let component: RecipieEditorComponent;
  let fixture: ComponentFixture<RecipieEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipieEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipieEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
