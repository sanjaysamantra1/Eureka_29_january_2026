import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDemo } from './directive-demo';

describe('DirectiveDemo', () => {
  let component: DirectiveDemo;
  let fixture: ComponentFixture<DirectiveDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
