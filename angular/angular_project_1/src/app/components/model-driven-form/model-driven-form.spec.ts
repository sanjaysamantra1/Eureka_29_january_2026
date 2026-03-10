import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenForm } from './model-driven-form';

describe('ModelDrivenForm', () => {
  let component: ModelDrivenForm;
  let fixture: ComponentFixture<ModelDrivenForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelDrivenForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDrivenForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
